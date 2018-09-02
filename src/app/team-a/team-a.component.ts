import { Component, OnInit } from '@angular/core';
import graphData from "../../models/data.model";

@Component({
  selector: 'app-team-a',
  templateUrl: './team-a.component.html',
  styleUrls: ['./team-a.component.css']
})

export class TeamAComponent {
	shape : String = "Pie";
	selectDefault:String = "--Select--"
	selectItems:any = [
		{
			name: "Incidents",
			value: "1"
		},
		{
			name: "Tasks",
			value: "2"
		},
		{
			name: "RFCs",
			value: "3"
		}
	];


	public chartOptions:any = {
	   scaleShowVerticalLines: false,
	   responsive: true,
	   scales: {
	   		yAxes: [{
	   			ticks: {
	   				max : 100,
	   				min : 0,
	   				steps : 10
	   			}
	   		}]
	   }
	};

	public chartLabels:string[] = [];
	public chartType:string = 'bar';
	public chartLegend:boolean = true;
	 
	public chartData:any[] = [
	  {data: [], label: ''}
	];

	gd : any;

	ngOnInit () {
		this.gd = graphData;
		this.loadChartData(0);
	}

	changeShape () {
		this.shape = (this.shape == 'Bar') ? 'Pie' : 'Bar';
		this.chartType = (this.chartType == 'bar') ? 'pie' : 'bar';
	}

	doSomething (data) {
		this.selectDefault = data.name;
		switch(data.value) {
			case "1": { 
						this.resetChartData();
						console.log("---Showing Incident Data---");
						this.loadChartData(0);
						break;
					}
			case "2": {
						this.resetChartData();
						console.log("---Showing Tasks Data---");
						this.loadChartData(1);
						break;
					}
			case "3": {
						this.resetChartData();
						console.log("---Showing RFCs Data---");
						this.loadChartData(2);
						break;	
					}
			default: {
						console.log("default");
					 }
		}
	}

	loadChartData(i:number) {
		// ChartLabels Populated
		var length = (this.gd[i].chartLabels.labels).length;
		for (var index = 0 ; index < length ; index++) {
			
			var chartLabel = this.gd[i].chartLabels.labels[index].data[3];
			this.chartLabels.push(chartLabel.val);
			
			var chartData  = this.gd[i].chartData.data[(length*index)+3];
			var chartLabel = this.gd[i].chartData.label;
			this.chartData[0].data.push(chartData.val);
			
			this.chartData[0].label = chartLabel;
		}
	}


	resetChartData() {
		this.chartLabels = [];
		this.chartData = [
		  {data: [], label: ''}
		];
	}

	public chartClicked(e:any):void {
	    console.log(e);
	}
}
