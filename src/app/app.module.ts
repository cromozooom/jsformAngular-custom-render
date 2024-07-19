import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { JsonFormsModule } from "@jsonforms/angular";
import { JsonFormsAngularMaterialModule } from "@jsonforms/angular-material";
import { AppComponent } from "./app.component";
import { CustomAutocompleteControlRenderer } from "./custom.autocomplete";
import { DataDisplayComponent } from "./data.control";
import { LangComponent } from "./lang.control";

import { CommonModule } from "@angular/common";
import { CustomRatingComponent } from "./custom-rating.component";

@NgModule({
  declarations: [
    AppComponent,
    CustomAutocompleteControlRenderer,
    LangComponent,
    DataDisplayComponent,
    CustomRatingComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    JsonFormsModule,
    JsonFormsAngularMaterialModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  schemas: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
