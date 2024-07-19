import { Component } from "@angular/core";
import { JsonFormsControl } from "@jsonforms/angular";
import {
  ControlProps,
  isControl,
  rankWith,
  scopeEndsWith,
  and,
  Actions,
} from "@jsonforms/core";
import { JsonFormsAngularService } from "@jsonforms/angular";

@Component({
  selector: "app-custom-rating",
  templateUrl: "./custom-rating.component.html",
  styleUrls: ["./custom-rating.component.css"],
})
export class CustomRatingComponent extends JsonFormsControl {
  ratings = [1, 2, 3, 4, 5];

  constructor(public jsonFormsService: JsonFormsAngularService) {
    super(jsonFormsService);
  }

  setRating(rating: number) {
    this.jsonFormsService.updateCore(
      Actions.update(this.propsPath, () => rating)
    );
  }

  mapAdditionalProps(props: ControlProps) {
    // Additional mapping if required
  }
}

export const customRatingTester = rankWith(
  5,
  and(isControl, scopeEndsWith("rating"))
);
