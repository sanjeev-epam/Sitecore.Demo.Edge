import { BuyerProduct, RequiredDeep, Spec, Variant } from 'ordercloud-javascript-sdk';

type DiscoverProduct = {
  name: string;
  price: number;
  image_url: string;
  brand: string;
  sku: string;
};

export const sku = 'PSPRFSAW';
export const product: RequiredDeep<BuyerProduct> = {
  PriceSchedule: {
    OwnerID: 'play-summit-ordercloud-discover',
    ID: 'PSPRFSAW',
    Name: 'PSPRFSAW',
    ApplyTax: false,
    ApplyShipping: false,
    MinQuantity: 1,
    MaxQuantity: 0,
    UseCumulativeQuantity: false,
    RestrictedQuantity: false,
    PriceBreaks: [
      {
        Quantity: 1,
        Price: 15.0,
        SalePrice: 0,
      },
    ],
    Currency: '',
    SaleStart: '',
    SaleEnd: '',
    IsOnSale: false,
    xp: {},
  },
  ID: 'PSPRFSAW',
  Name: 'Robit Fitness Strengthening Ab Wheel',
  Description:
    'An ab wheel makes it easy for you to target your arms, back, and core comfortably with a large wheel width for extra stability and beveled edges for smooth directional transitions. The wheel also has a raised, non-slip handle texture that provides you with a superior grip so you can focus on your body and movement. Each ab wheel comes with an exercise guide to help you get started &mdash; or continue on &mdash; your journey to feeling and being your best self.\n',
  QuantityMultiplier: 1,
  ShipWeight: 0,
  ShipHeight: 0,
  ShipWidth: 0,
  ShipLength: 0,
  Active: true,
  SpecCount: 3,
  VariantCount: 9,
  ShipFromAddressID: '',
  Inventory: {
    Enabled: true,
    NotificationPoint: 0,
    VariantLevelTracking: false,
    OrderCanExceed: false,
    QuantityAvailable: 100,
    LastUpdated: '2022-03-01T21:01:49.913+00:00',
  },
  DefaultSupplierID: '',
  AllSuppliersCanSell: false,
  xp: {
    ProductGroup: 'PSPRFSAW',
    Facets: [
      {
        Brand: 'Robin Fitness',
      },
    ],
    Images: [
      {
        ThumbnailUrl: '',
        Url: 'https://assets.roguefitness.com/f_auto,q_auto,c_limit,w_1960,b_rgb:f8f8f8/catalog/Conditioning/Speed%20and%20Agility/Core%20and%20Stability/AD0053/AD0053-H_p1yblu.png',
      },
    ],
    Breadcrumbs: [{}],
    ShortDescription: 'Made for: strengthening arms, core, and back.',
  },
};
export const specs: RequiredDeep<Spec>[] = [
  {
    OwnerID: 'play-summit-ordercloud-discover',
    ID: 'PSPRFSAW-Color',
    ListOrder: 0,
    Name: 'Color',
    DefaultValue: '',
    Required: true,
    AllowOpenText: false,
    DefaultOptionID: '',
    DefinesVariant: true,
    xp: {},
    OptionCount: 3,
    Options: [
      {
        ID: 'B-10U4o5I0C36QpO5bhYmA',
        Value: 'Green',
        ListOrder: 0,
        IsOpenText: false,
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
        xp: {},
      },
      {
        ID: 'MYw46lDJwEGIFPTcwxVqsQ',
        Value: 'Blue',
        ListOrder: 0,
        IsOpenText: false,
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
        xp: {},
      },
      {
        ID: 'QNo7lLAeU06CuDNxzegLNQ',
        Value: 'Red',
        ListOrder: 0,
        IsOpenText: false,
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
        xp: {},
      },
    ],
  },
  {
    OwnerID: 'play-summit-ordercloud-discover',
    ID: 'PSPRFSAW-Name',
    ListOrder: 0,
    Name: 'Name',
    DefaultValue: null,
    Required: false,
    AllowOpenText: true,
    DefaultOptionID: '',
    DefinesVariant: false,
    xp: {},
    OptionCount: 0,
    Options: [],
  },
  {
    OwnerID: 'play-summit-ordercloud-discover',
    ID: 'PSPRFSAW-Size',
    ListOrder: 0,
    Name: 'Size',
    DefaultValue: null,
    Required: true,
    AllowOpenText: false,
    DefaultOptionID: '',
    DefinesVariant: true,
    xp: {},
    OptionCount: 3,
    Options: [
      {
        ID: 'juPPqnZ58UmlD5Xf4AYVzA',
        Value: 'Large',
        ListOrder: 0,
        IsOpenText: false,
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
        xp: {},
      },
      {
        ID: 'QLVAT4S67UCD1e_VEINHOQ',
        Value: 'Medium',
        ListOrder: 0,
        IsOpenText: false,
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
        xp: {},
      },
      {
        ID: 'X-X7TkKSp0agH0Z9Hh-mzA',
        Value: 'Small',
        ListOrder: 0,
        IsOpenText: false,
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
        xp: {},
      },
    ],
  },
];
export const variants: RequiredDeep<Variant>[] = [
  {
    ID: 'PSPRFSAW-BL',
    Name: 'Blue Large',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:08:36.36+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'MYw46lDJwEGIFPTcwxVqsQ',
        Value: 'Blue',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'juPPqnZ58UmlD5Xf4AYVzA',
        Value: 'Large',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/BlueLarge.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-BM',
    Name: 'Blue Medium',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:08:54.397+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'MYw46lDJwEGIFPTcwxVqsQ',
        Value: 'Blue',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'QLVAT4S67UCD1e_VEINHOQ',
        Value: 'Medium',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/BlueMedium.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-BS',
    Name: 'Blue Small',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:09:06.64+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'MYw46lDJwEGIFPTcwxVqsQ',
        Value: 'Blue',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'X-X7TkKSp0agH0Z9Hh-mzA',
        Value: 'Small',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/BlueSmall.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-GL',
    Name: 'Green Large',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:09:37.943+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'B-10U4o5I0C36QpO5bhYmA',
        Value: 'Green',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'juPPqnZ58UmlD5Xf4AYVzA',
        Value: 'Large',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/GreenLarge.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-GM',
    Name: 'Green Medium',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:10:02.637+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'B-10U4o5I0C36QpO5bhYmA',
        Value: 'Green',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'QLVAT4S67UCD1e_VEINHOQ',
        Value: 'Medium',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/GreenMedium.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-GS',
    Name: 'Green Small',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:10:23.78+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'B-10U4o5I0C36QpO5bhYmA',
        Value: 'Green',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'X-X7TkKSp0agH0Z9Hh-mzA',
        Value: 'Small',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/GreenSmall.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-RL',
    Name: 'Red Large',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:10:46.87+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'QNo7lLAeU06CuDNxzegLNQ',
        Value: 'Red',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'juPPqnZ58UmlD5Xf4AYVzA',
        Value: 'Large',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/RedLarge.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-RM',
    Name: 'Red Medium',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-01T20:11:11.16+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'QNo7lLAeU06CuDNxzegLNQ',
        Value: 'Red',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'QLVAT4S67UCD1e_VEINHOQ',
        Value: 'Medium',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/RedMedium.png',
        },
      ],
    },
  },
  {
    ID: 'PSPRFSAW-RS',
    Name: 'Red Small',
    Description: '',
    Active: true,
    ShipWeight: 0,
    ShipHeight: 0,
    ShipWidth: 0,
    ShipLength: 0,
    Inventory: {
      QuantityAvailable: 0,
      LastUpdated: '2022-03-07T22:21:46.427+00:00',
    },
    Specs: [
      {
        SpecID: 'PSPRFSAW-Color',
        Name: 'Color',
        OptionID: 'QNo7lLAeU06CuDNxzegLNQ',
        Value: 'Red',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
      {
        SpecID: 'PSPRFSAW-Size',
        Name: 'Size',
        OptionID: 'X-X7TkKSp0agH0Z9Hh-mzA',
        Value: 'Small',
        PriceMarkupType: 'NoMarkup',
        PriceMarkup: 0,
      },
    ],
    xp: {
      Images: [
        {
          ThumbnailUrl: '',
          Url: 'https://headstartdemo.blob.core.windows.net/assets/RedSmall.png',
        },
      ],
    },
  },
];

export const moreProducts: DiscoverProduct[] = [
  {
    image_url: '/assets/img/shop/demo/bike-lights.jpg',
    price: 25.99,
    name: 'Outrace bike light set',
    brand: 'Outrace',
    sku: '0923',
  },
  {
    image_url: '/assets/img/shop/demo/pump-1.png',
    price: 40,
    name: 'CenterCycle Travel pump',
    brand: 'CenterCycle',
    sku: '129489',
  },
  {
    image_url: '/assets/img/shop/demo/ratchet-kit-3.jpg',
    price: 52.95,
    name: 'CenterCycle Ratchet kit',
    brand: 'CenterCycle',
    sku: '193405',
  },
  {
    image_url: '/assets/img/shop/demo/bike-seat-1.jpg',
    price: 119.99,
    name: 'Striva Ergonomic bike seat',
    brand: 'Striva',
    sku: '239805',
  },
  {
    image_url: '/assets/img/shop/demo/bike-helmet-1.jpg',
    price: 50,
    name: 'Outrace lightweight bicycle helmet',
    brand: 'Outrace',
    sku: '62382',
  },
];

export const similarProducts: DiscoverProduct[] = [
  {
    image_url: '/assets/img/shop/demo/tough-and-durable-012x.jpg',
    price: 500,
    name: 'OverUnder smartwatch',
    brand: 'OverUnder',
    sku: '1234',
  },
  {
    image_url: '/assets/img/shop/demo/smart-band-1.png',
    price: 45,
    name: 'Striva Smart band',
    brand: 'Striva',
    sku: '2367',
  },
  {
    image_url: '/assets/img/shop/demo/prod-habitat-striva5.jpeg',
    price: 19.95,
    name: 'Striva Smart fitness tracker',
    brand: 'Striva',
    sku: '6543',
  },
  {
    image_url: '/assets/img/shop/demo/Smart-audio-band-1.jpg',
    price: 150,
    name: 'Striva Smart audio band',
    brand: 'Striva',
    sku: '3456',
  },
  {
    image_url: '/assets/img/shop/demo/phone-holder.jpg',
    price: 24.95,
    name: 'Striva Bike phone holder',
    brand: 'Striva',
    sku: '2345',
  },
];
