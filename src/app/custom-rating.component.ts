import { Component } from "@angular/core";
import { JsonFormsControl } from "@jsonforms/angular";
import {
  ControlProps,
  isControl,
  rankWith,
  scopeEndsWith,
  and,
} from "@jsonforms/core";

@Component({
  selector: "app-custom-rating",
  templateUrl: "./custom-rating.component.html",
  styleUrls: ["./custom-rating.component.css"],
})
export class CustomRatingComponent extends JsonFormsControl {
  ratings = [1, 2, 3, 4, 5];

  getEventValue = (event: any) => parseInt(event.target.value, 10);

  setRating(rating: number) {
    console.log(rating);
    // this.handleChange(this.propsPath, rating);
  }

  mapAdditionalProps(props: ControlProps) {
    // Additional mapping if required
  }
}

export const customRatingTester = rankWith(
  5,
  and(isControl, scopeEndsWith("rating"))
);
