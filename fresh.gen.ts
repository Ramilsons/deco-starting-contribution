// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/Carousel.tsx";
import * as $$1 from "./islands/Header.tsx";
import * as $$2 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/About.tsx";
import * as $$$1 from "./sections/Carousel.tsx";
import * as $$$2 from "./sections/Cms.tsx";
import * as $$$3 from "./sections/Community.tsx";
import * as $$$4 from "./sections/Delight.tsx";
import * as $$$5 from "./sections/Divider.tsx";
import * as $$$6 from "./sections/Faq.tsx";
import * as $$$7 from "./sections/Features.tsx";
import * as $$$8 from "./sections/Footer.tsx";
import * as $$$9 from "./sections/Head.tsx";
import * as $$$10 from "./sections/Header.tsx";
import * as $$$11 from "./sections/Integration.tsx";
import * as $$$12 from "./sections/Markdown.tsx";
import * as $$$13 from "./sections/Partner.tsx";
import * as $$$14 from "./sections/QuillText.tsx";
import * as $$$$0 from "./functions/LoadGitHubRaw.ts";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/Carousel.tsx": $$0,
    "./islands/Header.tsx": $$1,
    "./islands/LiveControls.tsx": $$2,
  },
  sections: {
    "./sections/About.tsx": $$$0,
    "./sections/Carousel.tsx": $$$1,
    "./sections/Cms.tsx": $$$2,
    "./sections/Community.tsx": $$$3,
    "./sections/Delight.tsx": $$$4,
    "./sections/Divider.tsx": $$$5,
    "./sections/Faq.tsx": $$$6,
    "./sections/Features.tsx": $$$7,
    "./sections/Footer.tsx": $$$8,
    "./sections/Head.tsx": $$$9,
    "./sections/Header.tsx": $$$10,
    "./sections/Integration.tsx": $$$11,
    "./sections/Markdown.tsx": $$$12,
    "./sections/Partner.tsx": $$$13,
    "./sections/QuillText.tsx": $$$14,
  },
  functions: { "./functions/LoadGitHubRaw.ts": $$$$0 },
  schemas: {
    "./sections/About.tsx": {
      "inputSchema": {
        "title": " About",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "secondText": {
            "type": "string",
            "title": "Second Text",
          },
          "button": {
            "type": "string",
            "title": "Button",
          },
          "blackBlock": {
            "format": "html",
            "type": "string",
            "title": "Black Block",
          },
          "greenBlock": {
            "type": "string",
            "title": "Green Block",
          },
        },
        "required": [
          "mainText",
          "secondText",
          "button",
          "blackBlock",
          "greenBlock",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Carousel.tsx": {
      "inputSchema": {
        "title": " Carousel",
        "type": "object",
        "properties": {
          "images": {
            "title": "Images",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": {
                  "type": "string",
                  "title": "Title",
                },
                "text": {
                  "type": "string",
                  "title": "Text",
                },
                "image": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Image",
                },
                "author": {
                  "format": "image-uri",
                  "type": "string",
                  "title": "Author",
                },
              },
              "required": [
                "title",
                "text",
                "image",
                "author",
              ],
            },
          },
        },
        "required": [
          "images",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Cms.tsx": {
      "inputSchema": {
        "title": " Cms",
        "type": "object",
        "properties": {
          "firstTitle": {
            "type": "string",
            "title": "First Title",
          },
          "secondTitle": {
            "type": "string",
            "title": "Second Title",
          },
          "textLeftFirstTitle": {
            "type": "string",
            "title": "Text Left First Title",
          },
          "textRightFirstTitle": {
            "type": "string",
            "title": "Text Right First Title",
          },
          "textLeftSecondTitle": {
            "type": "string",
            "title": "Text Left Second Title",
          },
          "textRightSecondTitle": {
            "type": "string",
            "title": "Text Right Second Title",
          },
        },
        "required": [
          "firstTitle",
          "secondTitle",
          "textLeftFirstTitle",
          "textRightFirstTitle",
          "textLeftSecondTitle",
          "textRightSecondTitle",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Community.tsx": {
      "inputSchema": {
        "title": " Community",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "subText": {
            "type": "string",
            "title": "Sub Text",
          },
          "col1Title": {
            "type": "string",
            "title": "Col1 Title",
          },
          "col1Text": {
            "type": "string",
            "title": "Col1 Text",
          },
          "col2Title": {
            "type": "string",
            "title": "Col2 Title",
          },
          "col2Text": {
            "type": "string",
            "title": "Col2 Text",
          },
          "col3Title": {
            "type": "string",
            "title": "Col3 Title",
          },
          "col3Text": {
            "type": "string",
            "title": "Col3 Text",
          },
          "col4Title": {
            "type": "string",
            "title": "Col4 Title",
          },
          "col4Text": {
            "type": "string",
            "title": "Col4 Text",
          },
        },
        "required": [
          "mainText",
          "subText",
          "col1Title",
          "col1Text",
          "col2Title",
          "col2Text",
          "col3Title",
          "col3Text",
          "col4Title",
          "col4Text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Delight.tsx": {
      "inputSchema": {
        "title": " Delight",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "placeholder": {
            "type": "string",
            "title": "Placeholder",
          },
          "button": {
            "type": "string",
            "title": "Button",
          },
        },
        "required": [
          "mainText",
          "placeholder",
          "button",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Divider.tsx": {
      "inputSchema": null,
      "outputSchema": null,
    },
    "./sections/Faq.tsx": {
      "inputSchema": {
        "title": " Faq",
        "type": "object",
        "properties": {
          "quest1": {
            "type": "string",
            "title": "Quest1",
          },
          "quest2": {
            "type": "string",
            "title": "Quest2",
          },
          "quest3": {
            "type": "string",
            "title": "Quest3",
          },
          "quest4": {
            "type": "string",
            "title": "Quest4",
          },
          "quest5": {
            "type": "string",
            "title": "Quest5",
          },
        },
        "required": [
          "quest1",
          "quest2",
          "quest3",
          "quest4",
          "quest5",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Features.tsx": {
      "inputSchema": {
        "title": " Features",
        "type": "object",
        "properties": {
          "col1Ttitle": {
            "type": "string",
            "title": "Col1 Ttitle",
          },
          "col1Text": {
            "type": "string",
            "title": "Col1 Text",
          },
          "col2Title": {
            "type": "string",
            "title": "Col2 Title",
          },
          "col2Text": {
            "type": "string",
            "title": "Col2 Text",
          },
          "col3Title": {
            "type": "string",
            "title": "Col3 Title",
          },
          "col3Text": {
            "type": "string",
            "title": "Col3 Text",
          },
        },
        "required": [
          "col1Ttitle",
          "col1Text",
          "col2Title",
          "col2Text",
          "col3Title",
          "col3Text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Footer.tsx": {
      "inputSchema": {
        "title": " Footer",
        "type": "object",
        "properties": {
          "menuLinks": {
            "title": "Menu Links",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
              },
              "required": [
                "label",
                "href",
              ],
            },
          },
          "login": {
            "type": "string",
            "title": "Login",
          },
          "register": {
            "type": "string",
            "title": "Register",
          },
          "built": {
            "type": "string",
            "title": "Built",
          },
        },
        "required": [
          "menuLinks",
          "login",
          "register",
          "built",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "menuLinks": {
            "title": "Menu Links",
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "label": {
                  "type": "string",
                  "title": "Label",
                },
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "targetBlank": {
                  "type": [
                    "boolean",
                    "null",
                  ],
                  "title": "Target Blank",
                },
              },
              "required": [
                "label",
                "href",
              ],
            },
          },
          "idiom": {
            "type": "string",
            "title": "Idiom",
          },
          "pt": {
            "title": "Pt",
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label",
              },
              "url": {
                "type": "string",
                "title": "Url",
              },
              "selected": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Selected",
              },
            },
            "required": [
              "label",
              "url",
            ],
          },
          "eng": {
            "title": "Eng",
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label",
              },
              "url": {
                "type": "string",
                "title": "Url",
              },
              "selected": {
                "type": [
                  "boolean",
                  "null",
                ],
                "title": "Selected",
              },
            },
            "required": [
              "label",
              "url",
            ],
          },
          "login": {
            "title": "Login",
            "type": "object",
            "properties": {
              "label": {
                "type": "string",
                "title": "Label",
              },
              "url": {
                "type": "string",
                "title": "Url",
              },
            },
            "required": [
              "label",
              "url",
            ],
          },
          "linkedinUrl": {
            "type": "string",
            "title": "Linkedin Url",
          },
          "gitUrl": {
            "type": "string",
            "title": "Git Url",
          },
          "discordUrl": {
            "type": "string",
            "title": "Discord Url",
          },
        },
        "required": [
          "menuLinks",
          "idiom",
          "pt",
          "eng",
          "login",
          "linkedinUrl",
          "gitUrl",
          "discordUrl",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Integration.tsx": {
      "inputSchema": {
        "title": " Integration",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "secondText": {
            "type": "string",
            "title": "Second Text",
          },
        },
        "required": [
          "mainText",
          "secondText",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Markdown.tsx": {
      "inputSchema": {
        "title": " Markdown",
        "type": "object",
        "properties": {
          "text": {
            "type": "string",
            "title": "Text",
          },
        },
        "required": [
          "text",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Partner.tsx": {
      "inputSchema": {
        "title": " Partner",
        "type": "object",
        "properties": {
          "mainText": {
            "type": "string",
            "title": "Main Text",
          },
          "imgFirstLine": {
            "format": "image-uri",
            "type": "string",
            "title": "Img First Line",
          },
          "imgSecondLine": {
            "format": "image-uri",
            "type": "string",
            "title": "Img Second Line",
          },
          "imgThirdLine": {
            "format": "image-uri",
            "type": "string",
            "title": "Img Third Line",
          },
          "col1": {
            "type": "string",
            "title": "Col1",
          },
          "col2": {
            "type": "string",
            "title": "Col2",
          },
          "col3": {
            "type": "string",
            "title": "Col3",
          },
          "col4": {
            "type": "string",
            "title": "Col4",
          },
          "button": {
            "type": "string",
            "title": "Button",
          },
        },
        "required": [
          "mainText",
          "imgFirstLine",
          "imgSecondLine",
          "imgThirdLine",
          "col1",
          "col2",
          "col3",
          "col4",
          "button",
        ],
      },
      "outputSchema": null,
    },
    "./sections/QuillText.tsx": {
      "inputSchema": {
        "title": " Quill Text",
        "type": "object",
        "properties": {
          "html": {
            "format": "html",
            "type": "string",
            "title": "Html",
          },
        },
        "required": [
          "html",
        ],
      },
      "outputSchema": null,
    },
    "./functions/LoadGitHubRaw.ts": {
      "inputSchema": {
        "title": " Load Git Hub Raw",
        "type": "object",
        "properties": {
          "repo": {
            "type": "string",
            "title": "Repo",
            "description": "Complete user/repo format",
          },
          "branch": {
            "type": "string",
            "title": "Branch",
            "description": "Branch",
          },
          "path": {
            "type": "string",
            "title": "Path",
            "description":
              "Path to fetch, or leave blank and add :path route param.",
          },
        },
        "required": [
          "repo",
          "branch",
          "path",
        ],
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "data": {
            "$id": "5b1cd5713a375e18bb93e9635b8a2dc5fc2672cf",
          },
        },
        "additionalProperties": true,
      },
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
