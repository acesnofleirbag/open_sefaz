// WARN: All regex pattern as wrapped on a ^(<official-regex>)$ pattern. Because some issues on exactly match
export const RegexSEFAZ = {
    // schema: TDateTimeUTC | TSDateTimeUTC
    DateTimeUTC: new RegExp(
        /^((((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30)))))T(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d([\-,\+](0[0-9]|10|11):00|([\+](12):00)))$/,
    ),

    // schema: TChNFe
    AccessKey: new RegExp(/^([0-9]{44})$/),

    // schema: TCnpj
    CNPJ: new RegExp(/^([0-9]{14})$/),

    // schema: TSerie
    Serie: new RegExp(/^(0|[1-9]{1}[0-9]{0,2})$/),

    // schema: TNF
    NFENumber: new RegExp(/^([1-9]{1}[0-9]{0,8})$/),

    // schema: TCpf
    CPF: new RegExp(/^([0-9]{11})$/),

    // schema: TIeDest | TIe
    IE: new RegExp(/^(ISENTO|[0-9]{2,14})$/),

    // schema: TIeST | TIeDestNaoIsento
    IEWithoutISENTO: new RegExp(/^([0-9]{2,14})$/),

    // schema: TData | TSData
    Date: new RegExp(
        /^((((20(([02468][048])|([13579][26]))-02-29))|(20[0-9][0-9])-((((0[1-9])|(1[0-2]))-((0[1-9])|(1\d)|(2[0-8])))|((((0[13578])|(1[02]))-31)|(((0[1,3-9])|(1[0-2]))-(29|30))))))$/,
    ),

    // schema: TDec_1302
    Decimal13_02: new RegExp(/^(0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,12}(\.[0-9]{2})?)$/),

    // schema: TDec_0302a04
    Decimal3_02a04: new RegExp(/^(0|0\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2,4})?)$/),

    // schema: TDec_1104v
    Decimal11_01a04: new RegExp(/^(0|0\.[0-9]{1,4}|[1-9]{1}[0-9]{0,10}|[1-9]{1}[0-9]{0,10}(\.[0-9]{1,4})?)$/),

    // schema: TDec_1110v
    Decimal11_01a10: new RegExp(/^(0|0\.[0-9]{1,10}|[1-9]{1}[0-9]{0,10}|[1-9]{1}[0-9]{0,10}(\.[0-9]{1,10})?)$/),

    // schema: TDec_1302Opc
    Decimal13_02_Optional: new RegExp(/^(0\.[0-9]{1}[1-9]{1}|0\.[1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{0,12}(\.[0-9]{2})?)$/),

    // schema: TGuid
    GUID: new RegExp(/^([A-F0-9]{8}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{4}-[A-F0-9]{12})$/),

    // shema: TDec_08a03v
    Decimal08_01a03: new RegExp(/^(0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,7}(\.[0-9]{1,3})?)$/),

    // schema: TDec_0302a04Max100
    Decimal03_02a04max100: new RegExp(/^(0(\.[0-9]{2,4})?|[1-9]{1}[0-9]{0,1}(\.[0-9]{2,4})?|100(\.0{2,4})?)$/),

    // schema: TDec_1204temperatura
    Decimal12_01a04_Temperature: new RegExp(
        /^(0\.[1-9]{1}[0-9]{3}|0\.[0-9]{3}[1-9]{1}|0\.[0-9]{2}[1-9]{1}[0-9]{1}|0\.[0-9]{1}[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{0,11}(\.[0-9]{4})?)$/,
    ),

    // schema: TDec_1204v
    Decimal12_01a04: new RegExp(/^(0|0\.[0-9]{1,4}|[1-9]{1}[0-9]{0,11}|[1-9]{1}[0-9]{0,11}(\.[0-9]{1,4})?)$/),

    // schema: TDec_1203
    Decimal12_03: new RegExp(/^(0|0\.[0-9]{3}|[1-9]{1}[0-9]{0,11}(\.[0-9]{3})?)$/),

    // schema: TDec_03v00a04Max100Opc
    Decimal03_04max100_Optional: new RegExp(
        /^(0(\.[1-9][0-9]{0,3})|0(\.[0][1-9][0-9]{0,2})|0(\.[0][0][1-9][0-9]{0,1})|0(\.[0][0][0][1-9])|100(\.[0]{1,4})?|[1-9]{1}[0-9]{0,1}(\.[0-9]{1,4})?)$/,
    ),

    // schema: TDec_0302a04Opc
    Decimal3_02a04_Optional: new RegExp(/^(0\.[0-9]{2,4}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2,4})?)$/),

    // schema: TDec_0302Max100
    Decimal3_02max100: new RegExp(/^(0(\.[0-9]{2})?|100(\.00)?|[1-9]{1}[0-9]{0,1}(\.[0-9]{2})?)$/),

    // schema: TSDec15V2
    Decimal15_02: new RegExp(/^(0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,14}(\.[0-9]{2})?)$/),

    // schema: TSDec3V2
    Decimal3_02: new RegExp(/^(0|0\.[0-9]{2}|[1-9]{1}[0-9]{0,2}(\.[0-9]{2})?)$/),
};
