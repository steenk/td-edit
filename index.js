import $$$ from  "./src/lib/tripledollar.mjs";
import tdedit from "./src/tdedit.js";

$$$.appendToDoc(
	['h1', {style: 'text-shadow: 2pt 2pt 4pt gray; color:gold;'}, 'Tripledollar Rich Editor'],
	['p', 'Version ', tdedit.version],
	['div.td-rich-editor']
)
.then(() => {
	tdedit.init()
})

