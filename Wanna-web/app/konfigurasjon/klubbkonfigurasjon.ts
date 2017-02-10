import { Rekrutteringstekst } from "./rekrutteringstekst";
import { Injectable } from "angular2/core";

@Injectable()
export class Klubbkonfigurasjon{
    constructor(public rekrutteringstekst: Rekrutteringstekst){}
 }