import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppServiceMock } from './app.service.mock';
import Locadora from './domain/Locadora';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [ {
        provide: 'IAppService',
        useClass: AppServiceMock
      }],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Listar locadoras disponíveis', () => {
    it('Deverá retornar uma lista de locadoras"', () => {

    const locadoras = [];
    locadoras.push(new Locadora("Movida", "https://cdn2.rcstatic.com/images/supplier_logos/movida_logo_lrg.gif"))
    locadoras.push(new Locadora("Localiza","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAA7CAMAAAB2feWvAAAAllBMVEUAl0r///8AlEQAkDkAkTwAkj/I2Snu+POp07mYzKwAlUsAkkzQ3SbL2igAjjQAk0s3omEvnVi+1SvA38wAjC2rz7PH4tGVwzajz7JntYXd7uTo8+z3/fvQ59m40y3X69+Bv5ewzy9Ep2q32cN0u49DpENssz6DuzmexjSmyzE0pEOLxaFhr0Aim0hWrHR2uDtVqkIAhxxJNIqLAAAEB0lEQVRYhe1Wa3PiOgx1bDkPxwkJsIGUUB6BthTItv//z60k5wHd7Qz9cmfuTM6H1MayjyQfyRVixIgRI0aMGDHiP4QxZjKZxHE8MYbmoJT+4RFaKSWExK98lDS+Hl9eF4u33e60uLzjL7KeFcufEetzMSuELPG7f4jYTC4n305Pz749Xa4crmw8zyvUj3hVhXu0KvCbPUR7fLZ29/uU2MU1Np3vuPv8o3hljlvWAIHnVQ9tPNokWVxsYi9x/xvM8JDHstXzHnDLEoh9Aw/Yx8+JPxW+n5wGWqFWlLPuRAAtpYZurmmKwBWGBnIQQtxSSlmWZSZvMFjdZ+Fq/WQhEj95u+E1eMZT67XKwqdVEASbM9+3FssNTYMg11FFf1frEk1hg3tyiPCHRpe8QKgafWitDnd6OVqixKDt0fQ5K/GM2vGqyOtAnuiymwU6ferGKAWDsqrmitizdNbv8XLVT8JbYozX968f9O2J9RKttpwXvR2O8CIt9/2kULLqxpXsKoBklfI1td4p3Xvn3d3vDnO8i39j2EmnLLXuZZXS2WGW7TcccEor632GQCdzQkMWmasAILfWSuS4nnNm8BS22pMrza1Sj4lPxJcEU/3qiCV67aV9xos56YOc5+8KWsGg4lIFn3yxnNoGtpwV0pLmzDQ01mg1r79WyORiidi8T4l4Qsex18wLNauUAidGxed2ZQJZtEaJkUOQUoJzVXdRybxqaSGPCmfl3dfX5IWIp1dzsr79MO2dhny9QJfjvKTC/KxvspXWw12nVLerlJWWE60hogPc6zIV98QfmOMkeY8Xlqt4CFJoMlddwsP54IYAuurVLKQ0R4orQMnWXJK+vC2OOP9BUVP7rL/2E3PEHKOe45N9Rl72OpNdxmdkDiTxg8bkreaiF/pSKb64RnEFQMPseLukIqp3V5FazSPeLr4Six3q2b8Kfxe7lAbsGze/muJlXwz3E8ernqhicIEoXAVkQKLeStdDItrGDRfuKuQe8ZulVvn6atxjFCgFAOxuhS0uPfD9EK+XKa21pNCrFG24voBm0j1GkmmXn2TF+gDlZPfP922yQFUd369tbrxVXdezXPAwDLnnHLSm4KoQceBnD1dqzkhGqlPUL9BL6tTB8hdiy2kKarZap//iFTG+hC/csfJegeF80Kw3UzfdK5wXw8qW6ysEwV0DbrbMw2Hy7f8RU3tx/+MM0t8P3XVJN552S6UWA7Gr2wOULLXmxiENQ6tuvnlXzYttR3ofhQ6lhOwcRdG5FK4IIN9GBEMPlRtGDXZntM1lGYZLI5s67GCGDdHfau5wvXQPA76WDuSiJgy+Sp4PI17DNxrcS+3GLdhK6i8n/B3x90sjRowYMWLEiBH/I/wBOHhEDtKrxLEAAAAASUVORK5CYII="))

    expect(JSON.stringify(appController.listarLocadoras())).toBe(JSON.stringify(locadoras));
    });
  });
});
