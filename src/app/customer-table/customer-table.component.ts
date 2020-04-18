import { UserService } from '../user.service';
import {MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortable } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnInit {

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  dataSource;
  displayedColumns = ['name', 'username', 'email'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(results =>{
      if(!results){
        return;
      }
      this.dataSource= new MatTableDataSource(results);
      this.dataSource.sort = this.sort; 
      this.dataSource.paginator = this.paginator;

    
    })  
  }
  applyFilter (filtervalue: string){
    this.dataSource.filter = filtervalue.trim().toLowerCase();
  }



}

