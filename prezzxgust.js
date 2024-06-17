async function initMap() {
    
    /**
     * Location Markers
     */
    const prezzoMarker = [
        {
            locationName: 'Salisbury',
            lat: 51.06718,
            lng: -1.79784,
            postcode: 'SP1 2PF'
          },
          {
            locationName: 'East Grinstead',
            lat: 51.1241,
            lng: -0.00703,
            postcode: 'RH19 3AF'
          },
          {
            locationName: 'Braintree Village',
            lat: 51.87009,
            lng: 0.5709,
            postcode: 'CM77 8YH'
          },
          {
            locationName: 'Port Solent',
            lat: 50.84086,
            lng: -1.09708,
            postcode: 'PO6 4TP'
          },
          {
            locationName: 'Romsey',
            lat: 50.98813,
            lng: -1.49608,
            postcode: 'SO51 8GF'
          },
          {
            locationName: 'London Kensington',
            lat: 51.502,
            lng: -0.18908,
            postcode: 'W8 5BA'
          },
          {
            locationName: 'Reading',
            lat: 51.45485,
            lng: -0.96981,
            postcode: 'RG1 2HE'
          },
          {
            locationName: 'Cheltenham',
            lat: 51.89779,
            lng: -2.07944,
            postcode: 'GL50 1NW'
          },
          {
            locationName: 'London Euston',
            lat: 51.52709,
            lng: -0.13079,
            postcode: 'NW1 2BH'
          },
          {
            locationName: 'Woodbridge',
            lat: 52.0932,
            lng: 1.31546,
            postcode: 'IP12 1DH'
          },
          {
            locationName: 'Bournemouth West Central',
            lat: 50.71878,
            lng: -1.87951,
            postcode: 'BH2 5DD'
          },
          {
            locationName: 'Ringwood',
            lat: 50.84648,
            lng: -1.79437,
            postcode: 'BH24 1AN'
          },
          {
            locationName: 'Kings Lynn',
            lat: 52.75672,
            lng: 0.39375,
            postcode: 'PE30 1JW'
          },
          {
            locationName: 'Enfield',
            lat: 51.65238,
            lng: -0.08135,
            postcode: 'EN2 6LU'
          },
          {
            locationName: 'Weymouth',
            lat: 50.60833,
            lng: -2.45534,
            postcode: 'DT4 8EQ'
          },
          {
            locationName: 'Aldeburgh',
            lat: 52.15126,
            lng: 1.60147,
            postcode: 'IP15 5AQ'
          },
          {
            locationName: 'Peterborough',
            lat: 52.57267,
            lng: -0.24568,
            postcode: 'PE1 1NA'
          },
          {
            locationName: 'Cheam',
            lat: 51.35656,
            lng: -0.21644,
            postcode: 'SM3 8SQ'
          },
          {
            locationName: 'Broadstairs',
            lat: 51.35886,
            lng: 1.44236,
            postcode: 'CT10 1LU'
          },
          {
            locationName: 'Bridgwater',
            lat: 51.1284,
            lng: -3.00419,
            postcode: 'TA6 3BY'
          },
          {
            locationName: 'Godalming',
            lat: 51.18514,
            lng: -0.61139,
            postcode: 'GU7 1BD'
          },
          {
            locationName: 'Torquay',
            lat: 50.46151,
            lng: -3.52548,
            postcode: 'TQ2 5EG'
          },
          {
            locationName: 'Clacton On Sea',
            lat: 51.7874,
            lng: 1.15335,
            postcode: 'CO15 1RH'
          },
          {
            locationName: 'Canterbury',
            lat: 51.27967,
            lng: 1.07855,
            postcode: 'CT1 2AZ'
          },
          {
            locationName: 'Brighton Marina',
            lat: 50.81286,
            lng: -0.10213,
            postcode: 'BN2 5WA'
          },
          {
            locationName: 'Harrow St George\'s',
            lat: 51.58147,
            lng: -0.33895,
            postcode: 'HA1 1HS'
          },
          {
            locationName: 'Cheshire Oaks',
            lat: 53.26469,
            lng: -2.88613,
            postcode: 'CH65 9HD'
          },
          {
            locationName: 'Chelmsford',
            lat: 51.73451,
            lng: 0.4759,
            postcode: 'CM1 1GD'
          },
          {
            locationName: 'Upminster',
            lat: 51.55413,
            lng: 0.24859,
            postcode: 'RM14 2AJ'
          },
          {
            locationName: 'Hornchurch',
            lat: 51.56155,
            lng: 0.22359,
            postcode: 'RM11 3XT'
          },
          {
            locationName: 'Thame',
            lat: 51.74744,
            lng: -0.97722,
            postcode: 'OX9 3EW'
          },
          {
            locationName: 'Hull',
            lat: 53.74545,
            lng: -0.3475,
            postcode: 'HU2 8LN'
          },
          {
            locationName: 'Gainsborough',
            lat: 53.39888,
            lng: -0.77265,
            postcode: 'DN21 2NA'
          },
          {
            locationName: 'Lymington',
            lat: 50.75757,
            lng: -1.54424,
            postcode: 'SO41 9AH'
          },
          {
            locationName: 'Exmouth',
            lat: 50.61876,
            lng: -3.41428,
            postcode: 'EX8 1AH'
          },
          {
            locationName: 'Stevenage Leisure Park',
            lat: 51.89991,
            lng: -0.20826,
            postcode: 'SG1 2UA'
          },
          {
            locationName: 'London Northumberland Avenue',
            lat: 51.50719,
            lng: -0.12697,
            postcode: 'WC2N 5BW'
          },
          {
            locationName: 'Spalding',
            lat: 52.78758,
            lng: -0.15038,
            postcode: 'PE11 1TB'
          },
          {
            locationName: 'Nottingham',
            lat: 52.95539,
            lng: -1.14983,
            postcode: 'NG1 4AA'
          },
          {
            locationName: 'Leatherhead',
            lat: 51.29463,
            lng: -0.32869,
            postcode: 'KT22 8DN'
          },
          {
            locationName: 'Oswestry',
            lat: 52.85852,
            lng: -3.05633,
            postcode: 'SY11 2SP'
          },
          {
            locationName: 'Cheltenham Brewery',
            lat: 51.90346,
            lng: -2.07631,
            postcode: 'GL50 4FA'
          },
          {
            locationName: 'Haverhill',
            lat: 52.08207,
            lng: 0.44287,
            postcode: 'CB9 0BB'
          },
          {
            locationName: 'Lincoln',
            lat: 53.22885,
            lng: -0.54401,
            postcode: 'LN1 1YX'
          },
          {
            locationName: 'Northampton',
            lat: 52.23739,
            lng: -0.89542,
            postcode: 'NN1 2DA'
          },
          {
            locationName: 'Eastleigh',
            lat: 50.96685,
            lng: -1.35316,
            postcode: 'SO50 5SF'
          },
          {
            locationName: 'Crawley',
            lat: 51.115,
            lng: -0.19054,
            postcode: 'RH10 1BT'
          },
          {
            locationName: 'London Victoria',
            lat: 51.49454,
            lng: -0.14577,
            postcode: 'SW1W 9SJ'
          },
          {
            locationName: 'Cardiff St Davids',
            lat: 51.47943,
            lng: -3.174,
            postcode: 'CF10 2EF'
          },
          {
            locationName: 'London St Martins Lane',
            lat: 51.50992,
            lng: -0.12727,
            postcode: 'WC2N 4BD'
          },
          {
            locationName: 'Aberdeen Union Square Shopping Centre',
            lat: 57.14437,
            lng: -2.09608,
            postcode: 'AB11 5RG'
          },
          {
            locationName: 'Bury St Edmunds',
            lat: 52.24466,
            lng: 0.71482,
            postcode: 'IP33 1LW'
          },
          {
            locationName: 'Bishops Stortford',
            lat: 51.8722,
            lng: 0.15826,
            postcode: 'CM23 2LD'
          },
          {
            locationName: 'Cambridge',
            lat: 52.20959,
            lng: 0.11712,
            postcode: 'CB2 1UJ'
          },
          {
            locationName: 'Banstead',
            lat: 51.3218,
            lng: -0.20403,
            postcode: 'SM7 2LJ'
          },
          {
            locationName: 'Glasgow Braehead',
            lat: 55.87628,
            lng: -4.36348,
            postcode: 'G51 4BN'
          },
          {
            locationName: 'York Clifford Street',
            lat: 53.95694,
            lng: -1.0819,
            postcode: 'YO1 9RD'
          },
          {
            locationName: 'Uxbridge',
            lat: 51.54754,
            lng: -0.47952,
            postcode: 'UB8 1QS'
          },
          {
            locationName: 'Manchester Media City',
            lat: 53.47335,
            lng: -2.29705,
            postcode: 'M50 2HQ'
          },
          {
            locationName: 'London Glasshouse St Soho',
            lat: 51.5106,
            lng: -0.13689,
            postcode: 'W1B 5DL'
          },
          {
            locationName: 'London Kings Cross',
            lat: 51.53193,
            lng: -0.12405,
            postcode: 'N1C 4AH'
          },
          {
            locationName: 'Southport',
            lat: 53.64819,
            lng: -3.00432,
            postcode: 'PR8 1AA'
          },
          {
            locationName: 'New Brighton',
            lat: 53.4396,
            lng: -3.05332,
            postcode: 'CH45 2HZ'
          },
          {
            locationName: 'Street Clarks Village',
            lat: 51.12823,
            lng: -2.74056,
            postcode: 'BA16 0BB'
          },
          {
            locationName: 'Bristol',
            lat: 51.45045,
            lng: -2.60049,
            postcode: 'BS1 5DB'
          },
          {
            locationName: 'Swadlincote',
            lat: 52.77181,
            lng: -1.55563,
            postcode: 'DE11 9FQ'
          },
          {
            locationName: 'Kettering',
            lat: 52.39701,
            lng: -0.72752,
            postcode: 'NN16 0AQ'
          },
          {
            locationName: 'Fareham Whitely',
            lat: 50.88542,
            lng: -1.24657,
            postcode: 'PO15 7PD'
          },
          {
            locationName: 'Bath',
            lat: 51.37758,
            lng: -2.35784,
            postcode: 'BA1 1SX'
          },
          {
            locationName: 'Rayleigh',
            lat: 51.58711,
            lng: 0.60721,
            postcode: 'SS6 7EW'
          },
          {
            locationName: 'Leeds The Light',
            lat: 53.80005,
            lng: -1.54567,
            postcode: 'LS1 8TL'
          },
          {
            locationName: 'Felixstowe',
            lat: 51.96501,
            lng: 1.35247,
            postcode: 'IP11 7AB'
          },
          {
            locationName: 'Witham',
            lat: 51.79908,
            lng: 0.63888,
            postcode: 'CM8 1AH'
          },
          {
            locationName: 'Windsor',
            lat: 51.48377,
            lng: -0.60875,
            postcode: 'SL4 1PL'
          },
          {
            locationName: 'Hatfield Galleria',
            lat: 51.76135,
            lng: -0.24036,
            postcode: 'AL10 0XR'
          },
          {
            locationName: 'Leeds White Rose',
            lat: 53.75785,
            lng: -1.57422,
            postcode: 'LS11 8LU'
          },
          {
            locationName: 'Bicester',
            lat: 51.89789,
            lng: -1.15382,
            postcode: 'OX26 6DG'
          },
          {
            locationName: 'Trowbridge',
            lat: 51.31864,
            lng: -2.20721,
            postcode: 'BA14 8AH'
          },
          {
            locationName: 'Letchworth',
            lat: 51.97788,
            lng: -0.22935,
            postcode: 'SG6 3BY'
          },
          {
            locationName: 'York Vangarde Way',
            lat: 53.98348,
            lng: -1.04933,
            postcode: 'YO32 9AE'
          },
          {
            locationName: 'Milton Keynes Stadium',
            lat: 52.0108,
            lng: -0.73486,
            postcode: 'MK1 1ST'
          },
          {
            locationName: 'Broughton',
            lat: 53.16748,
            lng: -2.97297,
            postcode: 'CH4 0DP'
          },
          {
            locationName: 'Wisbech',
            lat: 52.65193,
            lng: 0.1434,
            postcode: 'PE14 0RG'
          },
          {
            locationName: 'Lakeside',
            lat: 51.48724,
            lng: 0.28138,
            postcode: 'RM20 2ZN'
          },
          {
            locationName: 'Farnborough',
            lat: 51.29196,
            lng: -0.75433,
            postcode: 'GU14 7SJ'
          },
          {
            locationName: 'Staines',
            lat: 51.43571,
            lng: -0.51131,
            postcode: 'TW18 4WB'
          },
          {
            locationName: 'Newport',
            lat: 51.58614,
            lng: -2.99271,
            postcode: 'NP20 1DS'
          },
          {
            locationName: 'Hinckley',
            lat: 52.53894,
            lng: -1.37426,
            postcode: 'LE10 0QQ'
          },
          {
            locationName: 'Grantham',
            lat: 52.91025,
            lng: -0.64114,
            postcode: 'NG31 6QF'
          },
          {
            locationName: 'Hemel Hempstead',
            lat: 51.74748,
            lng: -0.45578,
            postcode: 'HP2 4JS'
          },
          {
            locationName: 'Ware',
            lat: 51.81152,
            lng: -0.03221,
            postcode: 'SG12 9EE'
          },
          {
            locationName: 'Ipswich',
            lat: 52.05676,
            lng: 1.15392,
            postcode: 'IP1 1DT'
          },
          {
            locationName: 'Chippenham',
            lat: 51.46049,
            lng: -2.11862,
            postcode: 'SN15 1ES'
          },
          {
            locationName: 'Leicester Meridian',
            lat: 52.61382,
            lng: -1.18735,
            postcode: 'LE19 1JZ'
          },
          {
            locationName: 'Mumbles',
            lat: 51.57475,
            lng: -3.99784,
            postcode: 'SA3 4DN'
          },
          {
            locationName: 'Bournemouth Westover Road',
            lat: 50.71855,
            lng: -1.87437,
            postcode: 'BH1 2BZ'
          }
          
    ]

    const gustoMarker = [
        {
            locationName: 'Alderley Edge',
            lat: 53.3011,
            lng: -2.2360,
            postcode: 'SK9 7DY'
          },
          {
            locationName: 'Cheadle',
            lat: 53.3750,
            lng: -2.1869,
            postcode: 'SK8 7BS'
          },
          {
            locationName: 'Didsbury',
            lat: 53.4176,
            lng: -2.2317,
            postcode: 'M20 2DW'
          },
          {
            locationName: 'Heswall',
            lat: 53.3272,
            lng: -3.0955,
            postcode: 'CH60 0AH'
          },
          {
            locationName: 'Knutsford',
            lat: 53.3042,
            lng: -2.3727,
            postcode: 'WA16 6DX'
          },
          {
            locationName: 'Liverpool',
            lat: 53.4012,
            lng: -2.9918,
            postcode: 'L3 4AF'
          },
          {
            locationName: 'Manchester',
            lat: 53.4796,
            lng: -2.2479,
            postcode: 'M2 5AB'
          },
          {
            locationName: 'Edinburgh',
            lat: 55.9523,
            lng: -3.2058,
            postcode: 'EH2 4JS'
          },
          {
            locationName: 'Cookride',
            lat: 53.8456,
            lng: -1.6013,
            postcode: 'LS16 6HN'
          },
          {
            locationName: 'Leeds',
            lat: 53.7983,
            lng: -1.5477,
            postcode: 'LS1 5RU'
          },
          {
            locationName: 'Oxford',
            lat: 51.7523,
            lng: -1.2562,
            postcode: 'OX1 4AG'
          },
          {
            locationName: 'Newcasle',
            lat: 54.9710,
            lng: -1.5993,
            postcode: 'NE1 3DX'
          },
          {
            locationName: 'Birmingham',
            lat: 52.4820,
            lng: -1.8990,
            postcode: 'B3 2BS'
          },
          {
            locationName: 'Nottingham',
            lat: 52.9550,
            lng: -1.1491,
            postcode: 'NG1 2AR'
          }
          
    ]
    
    const gustoIconUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEUDKzgAJzYAIzUAITUAJDVLUUh+dFmTg2FASkUAHDMAKTcAGjJsZ1PFpnTUsXm5nnBHTkcAHzSjjmfRr3hkYVBETEavl2xya1UAGDJbXE4iOD5hX0/MrHcWMjsuP0GZh2PbtnyLfV6Ie101Q0LpMIRuAAAAzUlEQVR4AcSRtQHDQAwA/WiWQWaG/WcM01Oda08s798QyhglVsWZkL4vg9DUUZyk8CDLC90VJWBZ1XnSALRUlXGJaRBzQnjXIw6R0m+EaXjFs3xWu8YZtuwztLbDAhONHAvyCpvwPhZ5osTRFld2c7N4skSmJGKDGwgtN8tGi7/v+9GgIqPbQPdGEbvRHXCT6iryfTS2a5L0MJ30FXigKr14xUl0nBDa9RMkqozCFbBphWgbBN94S1y9X9bH5plokct9l3XIr8OXTAYUAAAWJQye0SR8wwAAAABJRU5ErkJggg=='
    const prezzoIconUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcBAMAAACAI8KnAAAAGFBMVEUAXikAUxwASBGaqY3T07y0vaP88d1ihGAUuc6eAAAAsUlEQVR4AU3NwQ3CMAwFULsT+PvCFWeGCgZo1Q3oAA2kZ7iwPrGVRHzJh5fvJNSDOkIjwtTDUBMhtHZe12ViASPKvZSSrwLhwfIWQbTT/vreysEcZN6zXcsp3NssumW0Za70IZLBzUmNdvG71Jafj70cxGgsNR8ANnimGu3L91BjTqawetAocGmnoaa1U1DTYG/HssEsyKzeGtTJAqf/41QgzYtVR4t401Q1WtdIZfrPD20rLwMXAK4bAAAAAElFTkSuQmCC' 

    const centerMap = { lat: 54.513034852908845, lng:-2.253481260078324 }
    
    const mapOptions = {
        center: centerMap,
        zoom: 5.6,
        disableDefaultUI:true,
        
    }
    
    const map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

    const bounds = new google.maps.LatLngBounds();

    /**
     * Lopp through Prezzo markers
     */
    for(let i = 0; i < prezzoMarker.length; i++) {
        const marker  = new google.maps.Marker({
            position: { lat: prezzoMarker[i]['lat'], lng: prezzoMarker[i]['lng'] },
            map: map,
            icon: {     
                url: prezzoIconUrl,
                scaledSize: new google.maps.Size(12,12)
            }
        });
        bounds.extend(new google.maps.LatLng(prezzoMarker[i]['lat'], prezzoMarker[i]['lng']))
        map.fitBounds(bounds)
    }
    /**
     * Loop through all Gusto markers
     */
    for(let i = 0; i < gustoMarker.length; i++) {
        const marker = new google.maps.Marker({
            position : { lat: gustoMarker[i]['lat'], lng: gustoMarker[i]['lng'] },
            map: map,
            icon: {
                url: gustoIconUrl,
                scaledSize: new google.maps.Size(12,12)
            }
        });
        bounds.extend(new google.maps.LatLng(gustoMarker[i]['lat'], gustoMarker[i]['lng']))
        map.fitBounds(bounds)
  
        
    }
}