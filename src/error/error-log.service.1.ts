
// To configure an external lib like newrelic-tracker follow these steps
// 1. Either download or in your index.html add areference to a newrelic script

//or do private nreRelic
// then in construtor call this.
declare const newrelic: { noticeError(error: any): void; };


// Import the core angular services.
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export abstract class ErrorLogService {

	// tslint:disable-next-line:indent
	private http: Http;

	// initialize the service.
	constructor(http: Http) {
		this.http = http;
	}

	// log the given error to various aggregation and tracking services.
	public logError(error: any): void {

		// Internal tracking.
		this.sendToConsole(error);
		this.sendToServer(error);

		// Software-as-a-Service (SaaS) tracking.
		this.sendToNewRelic(error);

	}

	// send the error the browser console (safely, if it exists).
	private sendToConsole(error: any): void {

		if (console && console.group && console.error) {

			console.group("Error Log Service");
			console.error(error);
			console.error(error.message);
			console.error(error.stack);
			console.groupEnd();

		}

	}


	// I send the error to the NewRelic error logging service.
	abstract sendToNewRelic(error: any): void ;


	// I send the error to the server-side error tracking end-point.
	abstract sendToServer(error: any): void ;
}