// Best friend's compatibility scores held here 
var friendsArray = [
	{
		name: `Freddie is super cool, creative, imaginative and always keeps cool under pressure`,
		photo: 'https://www.google.com/search?tbm=isch&sa=1&ei=ZN0rXOCiNZ2z0PEPyeO2sAY&q=Freddie+mercuryimages&oq=Freddie+mercuryimages&gs_l=img.3..0i7i30l10.32079.37549..37782...0.0..0.121.1631.13j4......1....1..gws-wiz-img.......0j0i10.E0iPlyTXpOI#imgrc=yvP-4zdVZ_BltM:',
		scores: [
			'5',
			'1',
			'5',
			'1',
			'5',
			'1',
			'3',
			'1',
			'5',
			'5'
		]
	},
	{
		name: 'Johny',
		photo: 'https://www.google.com/search?q=johnny+depp+images&tbm=isch&source=iu&ictx=1&fir=b474yVJXmk1eXM%253A%252CHZuH_IcZGkAGPM%252C_&usg=AI4_-kQ578H2qnf04JswLwAVqEKypx5qZw&sa=X&ved=2ahUKEwiQzZTvw83fAhVfCTQIHQmmAmIQ9QEwAHoECAMQBA#imgrc=b474yVJXmk1eXM:',
		scores: [
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2',
			'2'
		]
	},
	{
		name: 'Reese',
		photo: 'https://www.google.com/search?tbm=isch&sa=1&ei=QNwrXMW0M5ar0PEPhaat6A4&q=reese+witherspoon+images&oq=reese+images&gs_l=img.1.0.0i7i30l6j0i7i5i30j0i8i7i30j0i30j0i5i30.37577.39037..42301...0.0..0.103.558.5j1......1....1..gws-wiz-img.......0j0i67.knOgN2GqoR4#imgrc=GRiRA0BPFknfHM:',
		scores: [
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3',
			'3'
		]
	},
	{
		name: 'Oprah says you get a car!',
		photo: 'https://www.google.com/search?q=oprah+images&tbm=isch&source=iu&ictx=1&fir=qvLDDPOFMA2rdM%253A%252CZV89dAYk1fGK_M%252C_&usg=AI4_-kSA4uks2iaXQHC_mYPvicr03D3DZQ&sa=X&ved=2ahUKEwiX6dSuxM3fAhWBITQIHdCkANcQ9QEwAHoECAUQBA#imgrc=qvLDDPOFMA2rdM:',
		scores: [
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4',
			'4'
		]
	},
	{
		name: 'Tina',
		photo: 'https://www.google.com/search?tbm=isch&sa=1&ei=j9wrXKXOKciz0PEPhoSioAg&q=tina+fey+images&oq=tina+fey+images&gs_l=img.3..0.43263.44958..45160...0.0..0.108.735.7j1......1....1..gws-wiz-img.......0i67j0i7i30j0i8i7i30.kcTm01iJ9Ok#imgrc=JAGfvYnCV0ZkOM:',
		scores: [
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5',
			'5'
		]
	},
	{
		name: 'Amber',
		photo: 'https://www.google.com/search?tbm=isch&sa=1&ei=vdwrXNnrJpPZ9APL8Ln4Aw&q=amber+heard+images&oq=amber+heard+images&gs_l=img.3..0l3j0i7i30j0i5i30.31141.33859..34093...0.0..0.105.1014.9j2......1....1..gws-wiz-img.......0i67j0i7i10i30j0i7i5i30j0i8i7i30.Ae6N7c7kEj4#imgrc=EmeONQYjd7LswM:',
		scores: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5'
		]
	},
	{
		name: 'Tom',
		photo: 'https://www.google.com/search?tbm=isch&sa=1&ei=EN0rXP25JNTw9APHopuwBA&q=tom+hardy+images&oq=tom+hardy+images&gs_l=img.3..0l3j0i7i30l7.19098.20294..20487...0.0..0.123.869.7j2......1....1..gws-wiz-img.......0i67.5Lu64-6_0SU#imgrc=Yy4SCOSpVULBzM:',
		scores: [
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1'
		]
	},
	{
		name: 'Beyonce Knowles',
		photo: 'http://www.billboard.com/files/styles/article_main_image/public/media/beyonce-feb-2014-billboard-650.jpg',
		scores: [
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2'
		]
	},
	{
		name: 'Lady Gaga',
		photo: 'https://www.google.com/search?tbm=isch&sa=1&ei=Jt0rXOT7GpTg9AO-mICABQ&q=lady+gaga+images&oq=lady+gaga+images&gs_l=img.3..0l3j0i7i30l7.31732.32827..33101...0.0..0.104.853.7j2......1....1..gws-wiz-img.......0i67.fC7oNi9bZkA#imgrc=2-lifssAbMwfWM:',
		scores: [
			'4',
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3'
		]
	},
	{
		name: 'Ru Paul',
		photo: 'hhttps://www.google.com/search?tbm=isch&sa=1&ei=SN0rXOH6G4fF0PEPg-edmAM&q=ru+paulimages&oq=ru+paulimages&gs_l=img.3..0i7i30.26053.27068..27301...0.0..0.153.741.3j4......1....1..gws-wiz-img.bI1UCQ00vRo#imgrc=WUQOD_MuLQiIbM:',
		scores: [
			'5',
			'1',
			'2',
			'3',
			'4',
			'5',
			'1',
			'2',
			'3',
			'4'
		]
	},
	
];

module.exports = friendsArray;