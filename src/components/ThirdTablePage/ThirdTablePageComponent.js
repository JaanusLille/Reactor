import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';
import './spare.css';
import './flags.css';
import styled from 'styled-components';
import { MultiSelect } from 'primereact/multiselect';


const ThirdTableStyles = styled.div`
{
  padding: .9em;
  margin-bottom: 50px;
}
`;

export const ThirdTablePageComponent = () => {

  const [posts, setPosts] = useState([]);

  // const [loading, setLoading] = useState(false);

  const [columnKasutaja, setColumnKasutaja] = useState(true);
  const [columnKasutajanumber, setcolumnKasutajanumber] = useState(true);
  const [columnPealkiri, setColumnPealkiri] = useState(true);
  const [columnSisu, setColumnSisu] = useState(true);
  const [columnRiik, setColumnRiik] = useState(true);
  const [columnKuupäev, setColumnKuupäev] = useState(true);
// userId id title body country date
// Kasutaja Kasutajanumber Pealkiri Sisu Riik Kuupäev
  const columns = [
    { name: "Kasutaja", code: "kasutaja" },
    { name: "Kasutajanumber", code: "kasutajanumber" },
    { name: "Pealkiri", code: "pealkiri" },
    { name: "Sisu", code: "sisu" },
    { name: "Riik", code: "riik" },
    { name: "Kuupäev", code: "kuupäev" }
  ];

  const [selectedColumns, setSelectedColumns] = useState(columns);

  useEffect (() => {
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
  }, []);

  console.log({posts});

  useEffect(() => {
    setColumnKasutaja(selectedColumns.map(c=> c.code).includes("kasutaja"))
    setcolumnKasutajanumber(selectedColumns.map(c=> c.code).includes("kasutajanumber"))
    setColumnPealkiri(selectedColumns.map(c=> c.code).includes("pealkiri"))
    setColumnSisu(selectedColumns.map(c=> c.code).includes("sisu"))
    setColumnRiik(selectedColumns.map(c=> c.code).includes("riik"))
    setColumnKuupäev(selectedColumns.map(c=> c.code).includes("kuupäev"))
  }, [selectedColumns]);

  const getCountryFlag = (userId) => {
    if(userId === 1){
      return 'ee'
    }
    if(userId === 2){
      return 'lv'
    }
    if(userId === 3){
      return 'lt'
    }
    if(userId === 4){
      return 'fi'
    }
    if(userId === 5){
      return 'pl'
    }
    if(userId === 6){
      return 'ro'
    }
    if(userId === 7){
      return 'hu'
    }
    if(userId === 8){
      return 'bg'
    }
    if(userId === 9){
      return 'ge'
    }
    if(userId === 10){
      return 'hr'
    }
  }

  const getCountryName = (userId) => {
    if(userId === 1){
      return 'Eesti'
    }
    if(userId === 2){
      return 'Läti'
    }
    if(userId === 3){
      return 'Leedu'
    }
    if(userId === 4){
      return 'Soome'
    }
    if(userId === 5){
      return 'Poola'
    }
    if(userId === 6){
      return 'Rumeenia'
    }
    if(userId === 7){
      return 'Ungari'
    }
    if(userId === 8){
      return 'Bulgaaria'
    }
    if(userId === 9){
      return 'Gruusia'
    }
    if(userId === 10){
      return 'Horvaatia'
    }
  }




  const countryBodyTemplate = (rowData) => {
    return (
        <React.Fragment>
            <img 
              alt="flag" 
              src="/images/flag/flag_placeholder.png" 
              onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} 
              className={`flag flag-${getCountryFlag(rowData.userId)}`} 
              width={30} 
            />
            <span 
              className="image-text"
            >{getCountryName(rowData.userId)}</span>
        </React.Fragment>
    );
  }

  const getDate = (userId, id) => {
    if((id > 31)&&(id < 62)){ // 32 - 61
      id = id - 30;
    }
    if((id > 61)&&(id < 92)){ // 62 - 91
      id = id - 60;
    }
    if(id > 91){ // 92 ++
      id = id - 90;
    }
    return `${id}.${userId}.2022`
  }

  const dateTemplate = (rowData) => {
    return (
        <React.Fragment>
            <span 
              className="image-text"
            // >{rowData.userId}</span>
            >{getDate(rowData.userId, rowData.id)}</span>
        </React.Fragment>
    );
  }

    const onColumnToggle = (event
      // event: { value: any }
      ) => {
      setSelectedColumns(event.value)
    }
    
    const header = (
      <>
        <div className={'datatable-header'}>
        {/* <div className={'flex flex-grow'}> */}
        <MultiSelect
            maxSelectedLabels={0}
            selectedItemsLabel={selectedColumns.length + " selected"}
            value={selectedColumns}
            options={columns}
            optionLabel="name"
            dataKey="code"
            id="columnsSelect"
            placeholder="empty"
            onChange={onColumnToggle}
            style={{ width: '15em', fontWeight: 'normal' }}
          />
        </div>
      </>
    );

    return(
        <ThirdTableStyles>
          <DataTable
              header={header}
              emptyMessage="nodata"
              // loading={loading}
              className="datatable-responsive"
              paginatorTemplate="FirstPageLink PreviousPageLink PageLinks NextPageLink LastPageLink CurrentPageLink"
              rowHover
              stripedRows
              responsiveLayout="stack"
              breakpoint="960px"

              showGridlines 

              filterDisplay="row"
              dataKey="id"
              rows={15}
              paginator
              value={posts}
              currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
            >

            {columnKasutaja ? <Column 
              filter  
              filterPlaceholder="Kasutaja"
              className="datatable-filter-column-user" 
              field="userId"
              sortable 
              header="Kasutaja"
            ></Column> : null }

            {columnKasutajanumber ? <Column 
              filter 
              filterPlaceholder="Kasutajanumber" 
              className="datatable-filter-column-user-number"
              field="id" 
              sortable 
              header="Kasutajanumber" 
            ></Column> : null }

            {columnPealkiri ? <Column 
              filter 
              filterPlaceholder="Pealkiri" 
              className="datatable-filter-column"
              field="title" 
              sortable 
              header="Pealkiri" 
            ></Column> : null }

            {columnSisu ? <Column 
              filter 
              filterPlaceholder="Sisu" 
              className="datatable-filter-column"
              field="body" 
              sortable 
              header="Sisu" 
            ></Column> : null }

            {columnRiik ? <Column 
              filter 
              filterPlaceholder="Riik" 
              className="datatable-filter-column"
              // field="country" 
              sortable 
              header="Riik" 
              body={countryBodyTemplate}
            ></Column> : null }

            {columnKuupäev ? <Column 
              filter 
              filterPlaceholder="Kuupäev" 
              className="datatable-filter-column-date"
              // field="date" 
              sortable 
              header="Kuupäev" 
              body={dateTemplate}
            ></Column> : null }

          </DataTable>
          </ThirdTableStyles>
    );
};

export default ThirdTablePageComponent;
