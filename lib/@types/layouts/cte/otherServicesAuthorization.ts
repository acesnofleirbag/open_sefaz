import { EnvironmentIdentifier, UFCodeIBGE } from "../general";
import { VERSION } from "../version";

// web service: CTeRecepcaoOSV4

// schema: TCTeOS
export type OtherServicesAuthorizationRequest = {
    /** Tipo Conhecimento de Transporte Eletrônico Outros Serviços (Modelo 67) */
    infCte: {
        // TODO(@@@): schema
    };
};

// schema: TRetCTeOS
export type OtherServicesAuthorizationResponse = {
    retCTeOS: {
        $: { versao: string };
        /** Identificação do Ambiente:
         * 1 | Produção
         * 2 | Homologação
         */
        tpAmb: EnvironmentIdentifier;
        /** Identificação da UF */
        cUF: UFCodeIBGE;
        /** Versão do Aplicativo que processou a CT-e */
        verAplic: string;
        /** código do status do retorno da consulta */
        cStat: string;
        /** Descrição literal do status do do retorno da consulta */
        xMotivo: string;
        /** Resposta ao processamento do CT-e */
        protCTe: {
            $: { versao: VERSION; Id: string };
            /** Dados do protocolo de status */
            infProt: {
                /** Identificação do Ambiente:
                 * 1 | Produção
                 * 2 | Homologação
                 */
                tpAmb: EnvironmentIdentifier;
                /** Versão do Aplicativo que processou o CT-e */
                verAplic: string;
                /** Chaves de acesso da CT-e */
                chCTe: string;
                /** Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD */
                dhRecbto: string;
                /** Número do Protocolo de Status do CT-e */
                nProt?: string;
                /** Digest Value da CT-e processado. Utilizado para conferir a integridade do CT-e original */
                digVal: string;
                /** Código do status do CT-e */
                cStat?: string;
                /** Descrição literal do status do CT-e */
                xMotivo: string;
                /** Mensagem do Fisco */
                infFisco: string;
                /** Código do status da mensagem do fisco */
                cMsg: string;
                /** Mensagem do Fisco */
                xMsg: string;
                Signature?: string;
            };
        };
    };
};
