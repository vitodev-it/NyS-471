FROM node:20-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./

# Debug: see what npm ci actually does
RUN echo "=== npm version ===" && npm --version && \
    echo "=== running npm ci ===" && \
    npm ci 2>&1 && \
    echo "=== checking next ===" && \
    ls -la node_modules/next/dist/bin/next 2>&1 || echo "NEXT NOT FOUND" && \
    ls node_modules/.bin/next 2>&1 || echo ".bin/next NOT FOUND" && \
    echo "=== node_modules size ===" && \
    du -sh node_modules 2>&1

# If we got here, next should exist
RUN node node_modules/next/dist/bin/next build

FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=4001
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=deps /app/public ./public
COPY --from=deps /app/.next/standalone ./
COPY --from=deps /app/.next/static ./.next/static

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 4001

CMD ["node", "server.js"]
