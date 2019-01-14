const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
	"entry": "index.js",
	/* ... */
	plugins: [
		new GoogleFontsPlugin({
			fonts: [
				{ family: "Coiny" },
				{ family: "Roboto", variants: [ "400", "700italic" ] }
			],
			/* ...options */
      options: [
        {
          local: false
        }
      ]
		})
	]
}
