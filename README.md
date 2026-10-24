# FAFORLIFE Toothpaste — AMBOL website

A mobile-responsive static storefront built with HTML, CSS, and vanilla JavaScript. It is ready for Netlify deployment.

## Deploy to Netlify
1. Extract the ZIP file.
2. Open Netlify and choose **Add new site → Deploy manually** (the exact labels may vary).
3. Drag the extracted `faforlife-ambol-site` folder into the deploy area, or drag its contents if Netlify asks for the publish directory.
4. Open the generated site URL and test the WhatsApp order flow on a phone.

No build command is required. The publish directory is the project root (the folder containing `index.html`).

## Customise before launch
- **AMBOL logo:** replace the `.logo-placeholder` element in `index.html` with your own logo image, e.g. `<img src="assets/images/ambol-logo.png" alt="AMBOL logo">`. Put the logo file in `assets/images/` and adjust `.logo-placeholder` styles if needed.
- **Product photos:** replace the concept artwork in `assets/images/` with approved photographs of the actual FAFORLIFE product and packaging.
- **Videos:** four short MP4 concept ads are included in `assets/videos/`. They use animated illustrative artwork and are not authentic customer UGC or real recorded testimonials. Replace them with real, permissioned customer/creator footage before advertising them as UGC.
- **Product claims:** confirm ingredients, approved health claims, directions, age suitability, and warnings from the product's actual label. The website intentionally avoids promising medical outcomes.
- **Prices:** edit the `prices` object in `script.js` and the matching prices in `index.html` if the promotion changes.
- **WhatsApp:** the number is configured in `script.js` as `2348037444741` (Nigeria country code, without the leading zero). The direct display number in `index.html` is `0803 744 4741`.

## Included
- Responsive landing page and mobile navigation
- Product concept gallery and four locally hosted MP4 promo clips
- Promo pricing for 1–5 units
- Validated order form that opens WhatsApp with order details pre-filled
- Floating WhatsApp chat button and FAQ section

## Important
This is a static front-end website; it does not collect payments or save customer orders to a database. Customers must review and send their WhatsApp message, and AMBOL should confirm stock, delivery fees, and final total in chat.
