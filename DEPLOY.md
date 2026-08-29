# 🚀 Deployment Guide — ynot-app

Stack: **Next.js 15** → **Docker** → **Caddy v2** (Auto HTTPS)

---

## 📁 Files yang Dibuat

| File | Fungsi |
|---|---|
| `Dockerfile` | Multi-stage build → image produksi yang ringan |
| `docker-compose.yml` | Orkestrasi Next.js app + Caddy |
| `Caddyfile` | Konfigurasi reverse proxy + Auto SSL |
| `.dockerignore` | Exclude file tidak perlu dari build context |

---

## ⚙️ Persiapan Sebelum Deploy

### 1. Edit Domain di Caddyfile
Buka `Caddyfile`, ganti `yourdomain.com` dengan domain aslimu:
```
yourdomain.com {
    ...
}
```

Jika ingin redirect www:
```
www.yourdomain.com {
    redir https://yourdomain.com{uri} permanent
}
```

### 2. Pastikan DNS sudah pointing ke IP VPS
```
A    yourdomain.com     → <IP VPS>
A    www.yourdomain.com → <IP VPS>
```

---

## 🖥️ Setup VPS (Pertama Kali)

### Install Docker & Docker Compose
```bash
# Update package list
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com | sh

# Tambahkan user ke grup docker (agar tidak perlu sudo)
sudo usermod -aG docker $USER
newgrp docker

# Verifikasi
docker --version
docker compose version
```

### Buka Port Firewall
```bash
# UFW (Ubuntu/Debian)
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP (Caddy → Let's Encrypt)
sudo ufw allow 443/tcp   # HTTPS
sudo ufw allow 443/udp   # HTTP/3 (QUIC)
sudo ufw enable
```

---

## 🚢 Deploy ke VPS

### Opsi A: Git Pull (Recommended)

```bash
# Di VPS — clone repo
git clone https://github.com/username/ynot-app.git
cd ynot-app

# Build & jalankan
docker compose up -d --build
```

### Opsi B: Upload manual via SCP/rsync

```bash
# Dari lokal — upload ke VPS
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ./ user@<IP-VPS>:/srv/ynot-app/

# SSH ke VPS lalu jalankan
ssh user@<IP-VPS>
cd /srv/ynot-app
docker compose up -d --build
```

---

## 🔄 Update / Redeploy

```bash
# Pull perubahan terbaru
git pull

# Rebuild & restart (zero-downtime kurang lebih)
docker compose up -d --build

# Hapus image lama yang tidak terpakai
docker image prune -f
```

---

## 📋 Perintah Berguna

```bash
# Lihat status container
docker compose ps

# Lihat logs real-time
docker compose logs -f

# Lihat logs hanya app
docker compose logs -f app

# Lihat logs hanya caddy
docker compose logs -f caddy

# Stop semua
docker compose down

# Stop + hapus volume (HATI-HATI: hapus SSL certs Caddy)
docker compose down -v

# Restart hanya app (tanpa rebuild)
docker compose restart app

# Masuk ke dalam container
docker compose exec app sh
```

---

## 🔐 Environment Variables

Buat file `.env.production` di root project untuk variabel produksi:
```bash
# Contoh
DATABASE_URL=postgresql://...
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

Lalu tambahkan ke `docker-compose.yml` di service `app`:
```yaml
env_file:
  - .env.production
```

> ⚠️ Jangan commit file `.env*` ke Git!

---

## 🏗️ Arsitektur

```
Internet
   │
   ▼
[Caddy :80/:443]  ← Auto SSL via Let's Encrypt
   │
   │ reverse_proxy
   ▼
[Next.js :4001]   ← Internal Docker network only
```

Port 4001 **tidak** terbuka ke publik — hanya Caddy yang bisa akses via Docker internal network.

---

## 🩺 Troubleshooting

### SSL tidak muncul / Caddy error
```bash
docker compose logs caddy
# Pastikan port 80 & 443 terbuka dan domain sudah pointing ke IP VPS
```

### App tidak bisa diakses
```bash
docker compose logs app
# Cek apakah build berhasil
docker compose ps
```

### Container restart terus
```bash
docker compose logs --tail=50 app
# Biasanya ada error di runtime, cek env vars
```
