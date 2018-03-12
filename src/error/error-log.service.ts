
declare var newrelic: { noticeError(error: any): void; };


// Import the core angular services.
import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class ErrorLogService {

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

	// send the error to browser console (safely, if it exists).
	private sendToConsole(error: any): void {

		if (console && console.group && console.error) {

			console.group("Error Log Service");
			console.error(error);
			console.error(error.message);
			console.error(error.stack);
			console.groupEnd();

		}

	}


	//send the error to the NewRelic error logging service.
	private sendToNewRelic(error: any): void {
		// Read more: https://docs.newrelic.com/docs/browser/new-relic-browser/browser-agent-apis/report-data-events-browser-agent-api
		newrelic.noticeError(error);
	}


	//send the error to the server-side error tracking end-point.
	private sendToServer(error: any): void {

		this.http
			// tslint:disable-next-line:indent
			.post(
			"./error-logging-endpoint", // Doesn't really exist in demo.
			{
				type: error.name,
				message: error.message,
				stack: error.stack,
				location: window.location.href
			}
			)
			.subscribe(
			(httpResponse: Response): void => { },
			(httpError: any): void => {
				// Code goes here
				// console.log( "Http error:", httpError );
			}
			)
			;

	}
}