import React from 'react';

export default function JsonLd() {
  const corporationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://devdesigns.net/#corporation',
    name: 'DevDesigns',
    legalName: 'DevDesigns Enterprise Digital Infrastructure & Design',
    url: 'https://devdesigns.net',
    logo: 'https://devdesigns.net/icon.svg',
    image: 'https://devdesigns.net/icon.svg',
    description:
      'DevDesigns provides world-class UI/UX design, full-stack web and mobile application development, managed cloud hosting, and AI-driven SEO & growth solutions for scaling businesses.',
    foundingDate: '2024',
    knowsAbout: [
      'UI/UX Design',
      'Full-Stack Web Development',
      'Mobile Application Development',
      'Microsoft PowerApps & Power Platform',
      'Power Automate Workflow Automation',
      'Microsoft Dataverse Architecture',
      'Managed Cloud Hosting',
      'Domain Booking & Infrastructure',
      'Search Engine Optimization (SEO)',
      'Generative Engine Optimization (GEO)',
      'Answer Engine Optimization (AEO)',
      'Enterprise SaaS Architecture'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: 'https://devdesigns.net/contact',
        availableLanguage: ['English']
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales consultation',
        url: 'https://devdesigns.net/contact',
        availableLanguage: ['English']
      }
    ],
    sameAs: [
      'https://weekendtravellers.com',
      'https://unqode.com',
      'https://skgah.com',
      'https://hagarbath.com',
      'https://investments2go.com'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://devdesigns.net/#website',
    url: 'https://devdesigns.net',
    name: 'DevDesigns',
    description: 'Enterprise Digital Infrastructure & Design',
    publisher: {
      '@id': 'https://devdesigns.net/#corporation'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://devdesigns.net/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://devdesigns.net/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is DevDesigns and what services does it offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevDesigns is an enterprise digital agency specializing in end-to-end digital infrastructure. Core services include custom UI/UX design, web and mobile app development, scalable SaaS development, high-performance managed cloud hosting, domain booking, and data-driven SEO & growth strategies.'
        }
      },
      {
        '@type': 'Question',
        name: 'How fast can DevDesigns launch a web or mobile application?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevDesigns delivers production-ready MVPs and custom enterprise platforms in typically 2 to 4 weeks, backed by a 99.9% uptime SLA and continuous support.'
        }
      },
      {
        '@type': 'Question',
        name: 'What modern tech stack does DevDesigns use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevDesigns builds using Next.js, React, TypeScript, Node.js, Tailwind CSS, Framer Motion, GraphQL/REST APIs, Docker, and enterprise cloud infrastructure on AWS, GCP, and Vercel.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are DevDesigns platforms optimized for AI search (GEO and AEO)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All DevDesigns platforms come with native Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO), featuring structured JSON-LD schemas, LLM text manifests (llms.txt), semantic content hierarchies, and AI crawler access rules.'
        }
      },
      {
        '@type': 'Question',
        name: 'What PowerApps and Power Platform services does DevDesigns offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevDesigns offers end-to-end Microsoft PowerApps development, including custom Canvas apps, Model-Driven enterprise dashboards, Power Automate workflow automation, Dataverse relational database architecture, and custom REST API connectors.'
        }
      },
      {
        '@type': 'Question',
        name: 'What platforms or companies are built by or powered by DevDesigns?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'DevDesigns powers prominent digital platforms including WeekendTravellers (weekendtravellers.com), Unqode (unqode.com), SkGah (skgah.com), Hagarbath (hagarbath.com), and Investments2Go (investments2go.com).'
        }
      }
    ]
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': 'https://devdesigns.net/#services-list',
    name: 'DevDesigns Core Services',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'Breathtaking, user-centric interfaces designed to convert and captivate audiences.',
          provider: { '@id': 'https://devdesigns.net/#corporation' },
          url: 'https://devdesigns.net/ui-ux-design'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Web & Mobile App Development',
          description: 'Scalable, high-performance web and mobile applications built with modern frameworks.',
          provider: { '@id': 'https://devdesigns.net/#corporation' },
          url: 'https://devdesigns.net/web-development'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Microsoft PowerApps & Enterprise Automation',
          description: 'Custom PowerApps, Power Automate workflows, Dataverse data architecture, and custom API connectors.',
          provider: { '@id': 'https://devdesigns.net/#corporation' },
          url: 'https://devdesigns.net/powerapps'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Premium Managed Cloud Hosting',
          description: 'Enterprise-grade hosting solutions with 99.9% uptime SLA and lightning-fast speed.',
          provider: { '@id': 'https://devdesigns.net/#corporation' },
          url: 'https://devdesigns.net/hosting'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'SEO & Generative Engine Growth (GEO / AEO)',
          description: 'Data-driven search and answer engine optimization strategies for market dominance.',
          provider: { '@id': 'https://devdesigns.net/#corporation' },
          url: 'https://devdesigns.net/seo-growth'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  );
}
