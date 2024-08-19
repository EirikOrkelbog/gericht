const wineAndBeer = [
	{
		name: "Chapel Hill Shiraz",
		country: "AU",
		units: "Bottle",
		price: 56,
	},
	{
		name: "Catena Malbec",
		country: "AR",
		units: "Bottle",
		price: 59,
	},
	{
		name: "La Vieillw Rose",
		country: "FR",
		units: "750 ml",
		price: 44,
	},
	{
		name: "Rhino Pale Ale",
		country: "CA",
		units: "750 ml",
		price: 31,
	},
	{
		name: "Irish Guinness",
		country: "IE",
		units: "750 ml",
		price: 26,
	},
];

const cocktails = [
	{
		name: "Aperol Spritz",
		ingredients: ["Aperol", "Villa Marchesi prosecco", "Soda"],
		price: 20,
	},
	{
		name: "Dark 'N' Stormy",
		ingredients: ["Dark rum", "Ginger beer", "Slice of lime"],
		price: 18,
	},
	{
		name: "Daiquiri",
		ingredients: ["Rum", "Citrus juice", "Sugar"],
		price: 10,
	},
	{
		name: "Old Fashioned",
		ingredients: ["Bourbon", "Brown sugar", "Angostura Bitters"],
		price: 31,
	},
	{
		name: "Negroni",
		ingredients: ["Gin", "Sweet Vermouth", "Campari", "Orange garnish"],
		price: 26,
	},
];

function Drinks() {
	return (
		<div>
			<h2>Drinks</h2>
			<div>
				<h3>Wine & Beer</h3>
				<ul>
					{wineAndBeer.map((item) => (
						<li key={item.name}>{item.name}</li>
					))}
				</ul>
			</div>
			<div>
				<h3>Cocktails</h3>
				<ul>
					{cocktails.map((item) => (
						<li key={item.name}>{item.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Drinks;