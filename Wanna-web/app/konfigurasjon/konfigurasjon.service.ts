import { Injectable, OnInit } from "angular2/core";
import { Rekrutteringstekst } from "./rekrutteringstekst";
import { Klubbkonfigurasjon } from "./klubbkonfigurasjon";

@Injectable()
export class KonfigurasjonService{
    private _klubbkonfigurasjon: Klubbkonfigurasjon;
    constructor () {
        this._klubbkonfigurasjon = new Klubbkonfigurasjon(
            new Rekrutteringstekst(
                "Er du med på laget?",
                `Det å kunne levere idrettsprestasjoner på høyt nivå er bare mulig når 
                man har med seg gode samarbeidspartnere. Vipers har et godt og velfungerende nettverk
                av partnere som støtter opp om Vipers sin sportslige satsning og samtidig nyter partnerene
                godt av å være en del av et b2b-nettverk. Vil du være med på et av Norges mest vellykkede 
                partnersamarbeid? Meld deg på her! `
            )
        );
    }
    
    getRekrutteringstekst(): Rekrutteringstekst {
            return this._klubbkonfigurasjon.rekrutteringstekst;
    }


}