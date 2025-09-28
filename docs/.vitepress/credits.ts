/**
*  All Rights Reserved
*
*  Copyright (c) 2025 taskylizard
*
*  All rights reserved. This code and its associated files may not be copied, modified, distributed, sublicensed, or used in any form, in whole or in part, without prior written permission from the copyright holder.
*/
interface Contributor {
  name: string
  avatar: string
  // Optional.
  site?: string
}

export interface Contributors {
  core: Contributor[]
  contributors: Contributor[]
  special: Contributor[]
}

export const contribs = {
  core: [
    {
      name: 'taskylizard',
      avatar: 'https://github.com/taskylizard.png',
      site: 'https://github.com/taskylizard'
    },
    {
      name: 'Duck',
      avatar: 'https://github.com/woducku.png',
      site: 'https://github.com/woducku'
    },
    {
      name: 'Memenami',
      avatar: 'https://github.com/memenami.png',
      site: 'https://github.com/memenami'
    },

    {
      name: 'Static',
      avatar: 'https://github.com/whitenoisy.png',
      site: 'https://github.com/whitenoisy'
    },

    {
      name: 'TubaApollo',
      avatar: 'https://github.com/TubaApollo.png',
      site: 'https://github.com/TubaApollo'
    },
    {
      name: 'Venlicht',
      avatar: 'https://github.com/RenaraScope.png',
      site: 'https://github.com/RenaraScope'
    },
    {
      name: 'Zinklog',
      avatar: 'https://github.com/zinklog2.png',
      site: 'https://github.com/zinklog2'
    }
  ],
  contributors: [
    {
      name: 'DenpaEater',
      site: 'https://x.com/shibayanfanclub',
      avatar: '/pfp/denpa.jpg'
    },
    {
      avatar: 'https://github.com/farahnur42.png',
      name: 'Fahim',
      site: 'https://github.com/farahnur42'
    },
    {
      name: 'nuff',
      avatar: '/pfp/nuff.png'
    },
    {
      avatar: '/pfp/green.webp',
      name: 'Green'
    },
    {
      avatar: 'https://github.com/Helmasko.png',
      name: 'Helmasko',
      site: 'https://github.com/Helmasko'
    },
    {
      name: 'Ishtar',
      avatar: '/pfp/ishtar.png'
    },
    {
      name: 'Kai',
      avatar: 'https://github.com/officialkaizen.png',
      site: 'https://github.com/officialkaizen'
    },
    {
      name: 'ld3z',
      avatar: 'https://github.com/ld3z.png',
      site: 'https://github.com/ld3z'
    },
    {
      name: 'loocool',
      avatar: 'https://github.com/loocool2.png',
      site: 'https://github.com/loocool2'
    }
  ],
  special: [
    {
      name: 'Kobayashi',
      avatar: 'https://github.com/kobayashi90.png',
      site: 'https://www.ryuko.space/'
    },
    {
      name: 'TubaApollo',
      avatar: 'https://github.com/TubaApollo.png',
      site: 'https://github.com/TubaApollo'
    }
  ]
} satisfies Contributors
