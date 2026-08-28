# Run the Red Dot — GitHub Pages website

## Publish on GitHub Pages
1. Create a **public** GitHub repository (e.g. `run-the-red-dot`).
2. Upload **all files and the `assets` folder** from this package to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then Save.
6. GitHub will give you a temporary `github.io` URL.

## Connect your Wix-bought domain later
1. In GitHub: **Settings → Pages → Custom domain** and enter your domain.
2. In Wix: open **Domains → your domain → Manage DNS records**.
3. Point the DNS records to the values GitHub shows/recommends for GitHub Pages.
4. Once DNS has propagated, turn on **Enforce HTTPS** in GitHub Pages.

## SEO after your domain is connected
- Replace `YOURDOMAIN.com` in `sitemap.xml` with the final domain.
- Remove the `#` before the Sitemap line in `robots.txt`, and replace `YOURDOMAIN.com`.
- Add the site to Google Search Console and submit `/sitemap.xml`.

## Booking links currently included
- Sunrise Run: existing Stripe payment link.
- Night Run: WhatsApp enquiry/booking.
- Sunrise Run Club: WhatsApp interest registration.

## Easy edits
Open `index.html` in GitHub and click the pencil icon. Search for the text you want to change, edit it, then commit the change. GitHub Pages republishes automatically.
