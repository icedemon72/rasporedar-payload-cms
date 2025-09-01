import { type CollectionConfig } from 'payload';
import Hero from '../blocks/Hero';
import FAQ from '../blocks/FAQ';
import FeatureList from '@/blocks/FeatureList';
import SEO from '../fields/SEO';
import { apiKeyAccess } from '@/utils/auth';
import CallToAction from '@/blocks/CallToAction';
import ImageText from '@/blocks/ImageText';
import MediaGallery from '@/blocks/MediaGallery';
import Testimonial from '@/blocks/Testimonial';
import CardLinks from '@/blocks/CardLinks';
import Accordion from '@/blocks/Accordion';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: apiKeyAccess, 
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    SEO, 
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        CallToAction,
        FAQ,
        Accordion,
        FeatureList,
        Hero,
        ImageText,
        MediaGallery,
        Testimonial,
        CardLinks
      ],
    },
  ],
};