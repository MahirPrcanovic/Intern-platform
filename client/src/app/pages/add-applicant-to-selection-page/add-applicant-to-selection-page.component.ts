import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FullSelection } from 'src/app/interfaces/FullSelection';
import { ApplicationsService } from 'src/app/services/applications.service';
import { SelectionsService } from 'src/app/services/selections.service';
interface Applicant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  educationLevel: string;
  status: string;
}
@Component({
  selector: 'app-add-applicant-to-selection-page',
  templateUrl: './add-applicant-to-selection-page.component.html',
  styleUrls: ['./add-applicant-to-selection-page.component.css']
})
export class AddApplicantToSelectionPageComponent implements OnInit {
  queryParams = {
    page: 1,
    pageSize: 10,
    sortBy: null,
    filter: null,
    filterType: null,
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private selectionService: SelectionsService,
    private applicationService:ApplicationsService
  ) { }

  data:FullSelection  = {
    id: '',
    name: '',
    startDate: new Date(),
    endDate: new Date(),
    description: '',
    comments: [],
    applications: []
  };
  applicantsInSelection: Applicant[] = [];
  ngOnInit(): void {
    this.applicationService
    .getAllApplications(this.queryParams)
    .subscribe((response: any) => {
      this.applicantsInSelection = response.data;
      console.log(response);
    });

  }
  addApplicantToSelection(){

  }
}
