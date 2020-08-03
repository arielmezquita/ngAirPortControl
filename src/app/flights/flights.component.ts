import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  formDataFlight = {
    origin: null,
    destination: null,
    timedeparts: null,
    traverlers: null,
  
  }

  destinationList = [];
  flightimeDepartsList = [];
  flightavailable = [];
  flightdetails: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.destinationList = [ 'Tirana Airport Albania (TIA)',	'Algovia Airport Memmingen Alemania (FMM)',	'Berlín Brandeburgo Airport Alemania (BER)',	'Berlín Schönefeld Airport Alemania (SXF)',	'Berlín Tegel Airport Alemania (TXL)',	'Bremen Airport Alemania (BRE)',	'Colonia Bonn Airport Alemania (CGN)',	'Dortmund Airport Alemania (DTM)',	'Dresde Airport Alemania (DRS)',	'Dusseldorf Airport Alemania (DUS)',	'Frankfurt Airport Alemania (FRA)',	'Frankfurt-Hahn Airport Alemania (HHN)',	'Friedrichshafen Airport Alemania (FDH)',	'Hamburgo Airport Alemania (HAM)',	'Hanóver Airport Alemania (HAJ)',	'Karlsruhe Baden-Baden Airport Alemania (FKB)',	'Leipzig Halle Airport Alemania (LEJ)',	'Múnich Airport Alemania (MUC)',	'Münster Osnabrück Airport Alemania (FMO)',	'Núremberg Airport Alemania (NUE)',	'Paderborn Lippstadt Airport Alemania (PAD)',	'Stuttgart Airport Alemania (STR)',	'Weeze Airport Alemania (NRN)',	'Ereván Zvartnots Airport Armenia (EVN)',	'Graz Airport Austria (GRZ)',	'Innsbruck Airport Austria (INN)',	'Klagenfurt Airport Austria (KLU)',	'Linz Airport Austria (LNZ)',	'Salzburgo Airport Austria (SZG)',	'Viena Airport Austria (VIE)',	'Bakú Airport Azerbaiyán (GYD)',	'Amberes Airport Bélgica (ANR)',	'Bruselas Airport Bélgica (BRU)',	'Charleroi Airport Bélgica (CRL)',	'Lieja Airport Bélgica (LGG)',	'Ostende Brujas Airport Bélgica (OST)',	'Minsk Airport Bielorrusia (MSQ)',	'Sarajevo Airport Bosnia y Herzegovina (SJJ)',	'Tuzla Airport Bosnia y Herzegovina (TZL)',	'Burgas Airport Bulgaria (BOJ)',	'Sofía Airport Bulgaria (SOF)',	'Varna Airport Bulgaria (VAR)',	'Lárnaca Airport Chipre (LCA)',	'Pafos Airport Chipre (PFO)',	'Dubrovnik Airport Croacia (DBV)',	'Pula Airport Croacia (PUY)',	'Split Airport Croacia (SPU)',	'Zadar Airport Croacia (ZAD)',	'Zagreb Airport Croacia (ZAG)',	'Aalborg Airport Dinamarca (AAL)',	'Aarhus Airport Dinamarca (AAR)',	'Billund Airport Dinamarca (BLL)',	'Copenhague Airport Dinamarca (CPH)',	'Vágar Airport Dinamarca (FAE)',	'Bratislava Airport Eslovaquia (BTS)',	'Košice Airport Eslovaquia (KSC)',	'Liubliana Airport Eslovenia (LJU)',	'Alicante Airport España (ALC)',	'Almería Airport España (LEI)',	'Asturias Airport España (OVD)',	'Barcelona Airport España (BCN)',	'Bilbao Airport España (BIO)',	'Fuerteventura Airport España (FUE)',	'Girona Airport España (GRO)',	'Gran Canaria Airport España (LPA)',	'Granada-Jaén Airport España (GRX)',	'Ibiza Airport España (IBZ)',	'Jerez Airport España (XRY)',	'La Palma Airport España (SPC)',	'Lanzarote Airport España (ACE)',	'Madrid Barajas Airport España (MAD)',	'Málaga Airport España (AGP)',	'Menorca Airport España (MAH)',	'Palma de Mallorca Airport España (PMI)',	'Región de Murcia Airport España (RMU)',	'Reus Airport España (REU)',	'Santander Airport España (SDR)',	'Santiago de Compostela Airport España (SCQ)',	'Sevilla Airport España (SVQ)',	'Tenerife Norte Airport España (TFN)',	'Tenerife Sur Airport España (TFS)',	'Valencia Airport España (VLC)',	'Zaragoza Airport España (ZAZ)',	'Tallin Airport Estonia (TLL)',	'Helsinki Airport Finlandia (HEL)',	'Oulu Airport Finlandia (OUL)',	'Rovaniemi Airport Finlandia (RVN)',	'Tampere Airport Finlandia (TMP)',	'Turku Airport Finlandia (TKU)',	'Vaasa Airport Finlandia (VAA)',	'Ajaccio Airport Francia (AJA)',	'Bastia Airport Francia (BIA)',	'Bergerac Airport Francia (EGC)',	'Biarritz Airport Francia (BIQ)',	'Brest Bretaña Airport Francia (BES)',	'Burdeos Airport Francia (BOD)',	'Estrasburgo Airport Francia (SXB)',	'Figari Sud Corse Airport Francia (FSC)',	'Lille Airport Francia (LIL)',	'Lyon-Saint Exupéry Airport Francia (LYS)',	'Marsella Airport Francia (MRS)',	'Montpellier Airport Francia (MPL)',	'Nantes Airport Francia (NTE)',	'Niza Airport Francia (NCE)',	'París Beauvais Airport Francia (BVA)',	'París Charles de Gaulle Airport Francia (CDG)',	'París Orly Airport Francia (ORY)',	'Rennes Bretaña Airport Francia (RNS)',	'Réunion Roland Garros Airport Francia (RUN)',	'Toulon-Hyères Airport Francia (TLN)',	'Toulouse Blagnac Airport Francia (TLS)',	'Kutaisi Airport Georgia (KUT)',	'Tiflis Airport Georgia (TBS)',	'Atenas Airport Grecia (ATH)',	'Corfú Airport Grecia (CFU)',	'Cos Airport Grecia (KGS)',	'Heraklion Airport Grecia (HER)',	'La Canea Airport Grecia (CHQ)',	'Mykonos Airport Grecia (JMK)',	'Rodas Airport Grecia (RHO)',	'Santorini Airport Grecia (JTR)',	'Tesalónica Airport Grecia (SKG)',	'Zante Airport Grecia (ZTH)',	'Budapest Airport Hungría (BUD)',	'Debrecen Airport Hungría (DEB)',	'Cork Airport Irlanda (ORK)',	'Dublín Airport Irlanda (DUB)',	'Irlanda Oeste Airport Knock Irlanda (NOC)',	'Kerry Airport Irlanda (KIR)',	'Shannon Airport Irlanda (SNN)',	'Keflavík Airport Islandia (KEF)',	'Alguer Airport Italia (AHO)',	'Ancona Airport Italia (AOI)',	'Bari Airport Italia (BRI)',	'Bérgamo Airport Italia (BGY)',	'Bolonia Airport Italia (BLQ)',	'Brindisi Airport Italia (BDS)',	'Cagliari Airport Italia (CAG)',	'Catania Fontanarossa Airport Italia (CTA)',	'Comiso Airport Italia (CIY)',	'Florencia Airport Italia (FLR)',	'Génova Airport Italia (GOA)',	'Lamezia Terme Airport Italia (SUF)',	'Milán Linate Airport Italia (LIN)',	'Milán Malpensa Airport Italia (MXP)',	'Nápoles Airport Italia (NAP)',	'Olbia Costa Smeralda Airport Italia (OLB)',	'Palermo Airport Italia (PMO)',	'Perugia Airport Italia (PEG)',	'Pescara Airport Italia (PSR)',	'Pisa Airport Italia (PSA)',	'Roma Ciampino Airport Italia (CIA)',	'Roma Fiumicino Airport Italia (FCO)',	'Trapani Airport Italia (TPS)',	'Treviso Airport Italia (TSF)',	'Turín Airport Italia (TRN)',	'Venecia Airport Italia (VCE)',	'Verona Airport Italia (VRN)',	'Almatý Airport Kazajistán (ALA)',	'Nursultan Nazarbayev Airport Kazajistán (NQZ)',	'Pristina Airport Kosovo (PRN)',	'Riga Airport Letonia (RIX)',	'Kaunas Airport Lituania (KUN)',	'Vilnius Airport Lituania (VNO)',	'Luxemburgo Airport Luxemburgo (LUX)',	'Skopje Airport Macedonia del Norte (SKP)',	'Malta Airport Malta (MLA)',	'Chisináu Airport Moldavia (KIV)',	'Podgorica Airport Montenegro (TGD)',	'Tivat Airport Montenegro (TIV)',	'Ålesund Airport Noruega (AES)',	'Bergen Airport Noruega (BGO)',	'Bodø Airport Noruega (BOO)',	'Haugesund Airport Noruega (HAU)',	'Kristiansand Airport Noruega (KRS)',	'Oslo Airport Noruega (OSL)',	'Sandefjord Airport Torp Noruega (TRF)',	'Stavanger Airport Noruega (SVG)',	'Tromsø Airport Noruega (TOS)',	'Trondheim Airport Noruega (TRD)',	'Ámsterdam Airport Schiphol Países Bajos (AMS)',	'Eindhoven Airport Países Bajos (EIN)',	'Groninga Airport Eelde Países Bajos (GRQ)',	'Maastricht Aachen Airport Países Bajos (MST)',	'Róterdam La Haya Airport Países Bajos (RTM)',	'Breslavia Airport Polonia (WRO)',	'Cracovia Airport Polonia (KRK)',	'Gdansk Airport Polonia (GDN)',	'Katowice Airport Polonia (KTW)',	'Poznan Airport Polonia (POZ)',	'Szczecin-Goleniów Airport Polonia (SZZ)',	'Varsovia Airport Polonia (WAW)',	'Varsovia Modlin Airport Polonia (WMI)',	'Faro Airport Portugal (FAO)',	'Lisboa Airport Portugal (LIS)',	'Madeira Airport Portugal (FNC)',	'Oporto Airport Portugal (OPO)',	'Ponta Delgada Airport Portugal (PDL)',	'Aberdeen Airport Reino Unido (ABZ)',	'Belfast City Airport Reino Unido (BHD)',	'Belfast International Airport Reino Unido (BFS)',	'Birmingham Airport Reino Unido (BHX)',	'Bristol Airport Reino Unido (BRS)',	'Cardiff Airport Reino Unido (CWL)',	'Doncaster Sheffield Airport Reino Unido (DSA)',	'East Midlands Airport Reino Unido (EMA)',	'Edimburgo Airport Reino Unido (EDI)',	'Exeter Airport Reino Unido (EXT)',	'Glasgow Airport Reino Unido (GLA)',	'Glasgow Prestwick Airport Reino Unido (PIK)',	'Humberside Airport Reino Unido (HUY)',	'Jersey Airport Reino Unido (JER)',	'Leeds Bradford Airport Reino Unido (LBA)',	'Liverpool Airport Reino Unido (LPL)',	'Londres City Airport Reino Unido (LCY)',	'Londres Gatwick Airport Reino Unido (LGW)',	'Londres Heathrow Airport Reino Unido (LHR)',	'Londres Luton Airport Reino Unido (LTN)',	'Londres Southend Airport Reino Unido (SEN)',	'Londres Stansted Airport Reino Unido (STN)',	'Mánchester Airport Reino Unido (MAN)',	'Newcastle Airport Reino Unido (NCL)',	'Southampton Airport Reino Unido (SOU)',	'Brno Airport República Checa (BRQ)',	'Praga Airport República Checa (PRG)',	'Bucarest Henri Coanda Airport Rumania (OTP)',	'Cluj-Napoca Airport Rumania (CLJ)',	'Iasi Airport Rumania (IAS)',	'Timisoara Airport Rumania (TSR)',	'Koltsovo Airport Rusia (SVX)',	'Krasnodar Airport Rusia (KRR)',	'Moscú Domodédovo Airport Rusia (DME)',	'Moscú Sheremetyevo Airport Rusia (SVO)',	'Moscú Vnúkovo Airport Rusia (VKO)',	'Moscú Zhukovsky Airport Rusia (ZIA)',	'Novosibirsk Tolmachevo Airport Rusia (OVB)',	'San Petersburgo Púlkovo Airport Rusia (LED)',	'Sochi Airport Rusia (AER)',	'Belgrado Nikola Tesla Airport Serbia (BEG)',	'Niš Airport Serbia (INI)',	'Estocolmo Arlanda Airport Suecia (ARN)',	'Estocolmo Bromma Airport Suecia (BMA)',	'Estocolmo Skavsta Airport Suecia (NYO)',	'Estocolmo Västerås Airport Suecia (VST)',	'Gotemburgo Landvetter Airport Suecia (GOT)',	'Malmö Airport Suecia (MMX)',	'Basilea Mulhouse Friburgo Airport Suiza (BSL)',	'Berna Airport Suiza (BRN)',	'Ginebra Airport Suiza (GVA)',	'Zúrich Airport Suiza (ZRH)',	'Adana Airport Turquía (ADA)',	'Ankara Esenboga Airport Turquía (ESB)',	'Antalya Airport Turquía (AYT)',	'Dalaman Airport Turquía (DLM)',	'Esmirna Adnan Menderes Airport Turquía (ADB)',	'Estambul Airport Turquía (IST)',	'Estambul Sabiha Gökcen Airport Turquía (SAW)',	'Milas-Bodrum Airport Turquía (BJV)',	'Trebisonda Airport Turquía (TZX)',	'Kharkiv Airport Ucrania (HRK)',	'Kiev Boryspil Airport Ucrania (KBP)',	'Kiev Zhuliany Airport Ucrania (IEV)',	'Lviv Airport Ucrania (LWO)',	'Odesa Airport Ucrania (ODS)'
    ];
    this.flightimeDepartsList = [ '8:15', '10:15','12:15','14:15','16:15', '18:15', '20:15','22:15', '00:15', '02:15', '04:15', '06:15',];
  }

  flightsRequest(){
    const origin = this.formDataFlight.origin;
    const destination = this.formDataFlight.destination;
    const timedeparts = this.formDataFlight.timedeparts;
    
    const dataToSend = {
      origin: origin,
      destination: destination,
      timedeparts: timedeparts,
    }

    console.log(dataToSend);
  
    localStorage.setItem("flights", JSON.stringify(dataToSend));
  }

}
