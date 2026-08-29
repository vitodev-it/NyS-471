import type { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'YNot Solutions photo gallery, moments from our events, workshops, and community activities in Brunei.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
