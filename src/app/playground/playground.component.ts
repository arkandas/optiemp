import {Component, OnInit, ViewChild} from '@angular/core';
import {ClrWizard} from "@clr/angular";


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  selection: any;
  disabled: any;
  selected: any;
  modalMessage: string = '';

  states: any[] = [
    {name: 'California'},
    {name: 'Florida'},
    {name: 'Iowa'},
    {name: 'Kansas'},
    {name: 'Kentucky'},
    {name: 'Maine'},
    {name: 'Louisiana'},
    {name: 'New Hampshire'},
    {name: 'Utah'},
    {name: 'Pennsylvania'}]

  basicDate: any = 'N/A';
  editModal: boolean = false;
  blocks: any = ['Test', 'Test2'];

  @ViewChild("wizardlg") wizardLarge: ClrWizard | undefined;
  lgOpen: boolean = false;
  cloudActive: any;
  infrastructureActive: any;
  managementActive: any;
  dashboardActive: any;

  rootDirectory: any[] = [
    {
      name: "Applications",
      icon: "folder",
      expanded: true,
      files: [
        {
          icon: "calendar",
          name: "Calendar",
          active: true
        },
        {
          icon: "line-chart",
          name: "Charts",
          active: false
        },
        {
          icon: "dashboard",
          name: "Dashboard",
          active: false
        },
        {
          icon: "map",
          name: "Maps",
          active: false
        }
      ]
    },
    {
      name: "Files",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "file",
          name: "Cover Letter.doc",
          active: false
        }
      ]
    },
    {
      name: "Images",
      icon: "folder",
      expanded: false,
      files: [
        {
          icon: "image",
          name: "Screenshot.png",
          active: false
        }
      ]
    }
  ];
  modalOpened: boolean = false;
  modalFile: string = '';
  modalDirectory: string = '';

  openFile(directoryName: string, fileName: string) {
    this.modalFile = fileName;
    this.modalDirectory = directoryName;
    this.modalOpened = true;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
