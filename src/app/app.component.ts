import { Component, OnInit } from '@angular/core';
import { ApiConnectService } from './api-connect.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'HHA-Technical';
  totalStats_2015:any = [];
  displayStats:any = [];
  selectedState: string = '';

  constructor(
    private apiService:ApiConnectService) { }

    ngOnInit() {
      this.apiService.getAlaskaInfo().subscribe((data => {
        for (const d of (data as any)) {
          
          if(d.period == "2015") {
            this.totalStats_2015.push({
              region: d.region,
              region_code: d.region_code,
              period: d.period,
              at_least_one_measure: d.at_least_one_measure,
              immunization_measure: d.immunization_measure,
              reportable_lab_results: d.reportable_lab_results,
              syndromic_surveillance_measure: d.syndromic_surveillance_measure,
              registry_measure: d.registry_measure,
              stage_2_hospitals_all_measures: d.stage_2_hospitals_all_measures,
              stage_1_hospitals_all_measures: d.stage_1_hospitals_all_measures,
            });
          }
          if(d.period == "2015" && d.region == "Alabama") {
            this.displayStats.push({
              region: d.region,
              region_code: d.region_code,
              period: d.period,
              at_least_one_measure: d.at_least_one_measure,
              immunization_measure: d.immunization_measure,
              reportable_lab_results: d.reportable_lab_results,
              syndromic_surveillance_measure: d.syndromic_surveillance_measure,
              registry_measure: d.registry_measure,
              stage_2_hospitals_all_measures: d.stage_2_hospitals_all_measures,
              stage_1_hospitals_all_measures: d.stage_1_hospitals_all_measures,
            });
          }
        }
      }));
    }

    selectChangeHandler (event: any) {
      this.selectedState = event.target.value;
      while(this.displayStats.length){
        this.displayStats.pop();
      }  
      this.displayStats.push(this.totalStats_2015.find(n => n.region === this.selectedState));

      console.log(this.displayStats);
    }
  
}