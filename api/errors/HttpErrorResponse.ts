export class HttpErrorResponse extends Error {
	statusCode: number;

	constructor(message: string, statusCode: number) {
		super(message);

		this.name = "HttpErrorResponse";
		this.statusCode = statusCode;
	}
}
