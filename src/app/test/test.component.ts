import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  name = "testing";

  constructor() {}

  ngOnInit() {
    const data = from(fetch("https://jsonplaceholder.typicode.com/todos"));

    data.subscribe({
      next(response) {
        console.log(response.json());
        // response.json().then()
        // response.json().then(res => console.log(res));
      },
      error(err) {
        console.error("Error: " + err);
      },
      complete() {
        console.log("Completed");
      }
    });
  }
}
