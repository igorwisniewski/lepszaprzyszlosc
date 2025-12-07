import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
     // Tutaj wpisz swoją prawdziwą domenę po zakupie
    return [
        {
            url: 'https://fundacjalepszaprzyszlosc.pl',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `https://fundacjalepszaprzyszlosc.pl/fundacja`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },              {
            url: `https://fundacjalepszaprzyszlosc.pl/kontakt`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },     {
            url: `https://fundacjalepszaprzyszlosc.pl/onas`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
     {
       url: `https://fundacjalepszaprzyszlosc.pl/polityka-prywatnosci`,
        lastModified: new Date(),
         changeFrequency: 'yearly',
          priority: 0.5,
      },
    ];
}