const puppeteer = require('puppeteer');


export default async function handler(
    req, res
  ) {


    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://seminovosmovida.com.br/busca/versao-fusionsel20ecobo16v248cvaut/marca-ford/modelo-fusion/filtro-fusion');
    await page.screenshot({ path: 'example.png' });
  
    await browser.close();


    // const res_fetch = await fetch('https://seminovosmovida.com.br/busca/versao-fusionsel20ecobo16v248cvaut/marca-ford/modelo-fusion/filtro-fusion')
    // const html = await res_fetch.text()

    // const $ = cheerio.load(html)
    // $('.custom-card',html).each( function(){
    //     const imagem = ($(this).text())
    //     console.log(imagem)
    //     return res.send(imagem);
    // })
    
  


}  