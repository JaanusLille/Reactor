import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

// import { PersonSearchResponse, PartnerPersonApi } from '@prs-hr-ext-rest-api/openapi-rxjs';
// import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
// import { switchMap, tap, of, catchError, Subscription } from 'rxjs';

// import configData from "../../config.json";
// import { apiFactory } from '../../../src/app/middleware/api-factory';

import { MultiSelect } from 'primereact/multiselect';
// import { RemoveFiltersButton } from './RemoveFiltersPartnersButton';  // Siia lisada string
// import './flags.css';


const TableStyles = styled.div`
.p-button {
  margin: 0 0 0 0.75rem;
}

.p-datatable-thead {
  position: sticky;
  top: 0;
  z-index: 1;
}

.p-datatable-resizable > .p-datatable-wrapper {
  max-height: 63vh;
}

//  #columnsSelect {
//     max-width: 190px;
//     min-width: 190px;
//   }


`;

const Table = () => {
  // const { t } = useTranslation();
  // const contextPath = getConfig().publicRuntimeConfig.contextPath;

  const [posts, setPosts] = useState([]);


  // const [searchResult, setSearchResult] = useState<SearchResultState>({ persons: {persons: []} });
  const [loading, setLoading] = useState(false);

  const [columnFirstname, setColumnFirstname] = useState(true);
  const [columnLastname, setcolumnLastname] = useState(true);
  const [columnTimeofbirth, setColumnTimeofbirth] = useState(true);
  const [columnPersonalcode, setColumnPersonalcode] = useState(true);
  const [columnPersonalcodeCountry, setColumnPersonalcodeCountry] = useState(true);
  const [columnDocumentNumber, setColumnDocumentNumber] = useState(true);
  const [columnDocumentCountry, setColumnDocumentCountry] = useState(true);
  const [columnTelephoneNumber, setColumnTelephoneNumber] = useState(true);
  const [columnEmail, setColumnEmail] = useState(true);

  const columns = [
    { name: "Eesnimi", code: "eesnimi" },
    { name: "Perenimi", code: "perenimi" },
    { name: "Synniaeg", code: "synniaeg" },
    { name: "Isikukood", code: "isikukood" },
    { name: "Isikukoodi riik", code: "isikukoodi riik" },
    { name: "Dokumendi number", code: "dokumendi number" },
    { name: "Dokumendi riik", code: "dokumendi riik" },
    { name: "Tel. nr", code: "telefoninumber" },
    { name: "Email", code: "email" }
  ];

  const [selectedColumns, setSelectedColumns] = useState(columns);

  useEffect (() => {
    setLoading(true);
    axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => setPosts(res.data))
  }, []);
  console.log(posts);

  useEffect(() => {
    setColumnFirstname(selectedColumns.map(c=> c.code).includes("eesnimi"))
    setcolumnLastname(selectedColumns.map(c=> c.code).includes("perenimi"))
    setColumnTimeofbirth(selectedColumns.map(c=> c.code).includes("synniaeg"))
    setColumnPersonalcode(selectedColumns.map(c=> c.code).includes("isikukood"))
    setColumnPersonalcodeCountry(selectedColumns.map(c=> c.code).includes("isikukoodi riik"))
    setColumnDocumentNumber(selectedColumns.map(c=> c.code).includes("dokumendi number"))
    setColumnDocumentCountry(selectedColumns.map(c=> c.code).includes("dokumendi riik"))
    setColumnTelephoneNumber(selectedColumns.map(c=> c.code).includes("telefoninumber"))
    setColumnEmail(selectedColumns.map(c=> c.code).includes("email"))
  }, [selectedColumns]);


  const identityTemplate = (identityData) => {
        // console.log('data', identityData);
        return (
            <div>
            {identityData.identifiers.filter(row => row.type ==="identity_code").map( (row) => {
                return (<div style={{padding: '2px'}}>{row.code}</div>);
              })}
            </div>
        );        
  }

  const countryBodyTemplate = (identityData) => {
    // console.log('data', identityData.partyId);
    return (
      <div>
          {identityData.identifiers.filter(row => row.type ==="identity_code").map( (row) => {
                return (
                <div style={{padding: '2px'}}>                
                  <img 
                    src="./flag_placeholder.png"
                    // onError={() => (row.target.src = './flag_placeholder.png')}
                    alt=''
                    className={`flag flag-${row.countryCode.toLowerCase()}`} 
                    />
                  <span className="image-text" 
                  >{`${row.countryCode}`}</span>
                </div>);
              })}
        </div>
    );
  }

  const documentTemplate = (identityData) => {
        // console.log('data', identityData);
        return (
            <div>
            {identityData.identifiers.filter(row => row.type ==="document_number").map( (row) => {
                return (<div style={{padding: '2px'}}>{row.code}</div>);
              })}
            </div>
        );        
  }
  const documenrCountryTemplate = (identityData) => {
        // console.log('data', identityData);
        return (
            <div>
            {identityData.identifiers.filter(row => row.type ==="document_number").map( (row) => {
                return (
                <div style={{padding: '2px'}}>
                  <img 
                    src="./flag_placeholder.png"
                    // onError={() => (row.target.src = './flag_placeholder.png')}
                    alt=''
                    className={`flag flag-${row.countryCode.toLowerCase()}`} 
                    />
                  <span className="image-text" 
                  >{`${row.countryCode}`}</span>
                </div>);
              })}
            </div>
          );        
  }


    const onColumnToggle = (event: { value: any }) => {
      setSelectedColumns(event.value)
      // console.log(event);
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
          {/* <RemoveFiltersButton
            onClick={() => {
              // <p:commandButton onclick="PF('vtWidget').clearFilters()" />

            //   dispatch(clearTerm());
            //   setLazyParams({ ...lazyParams, filters: initFilters() });
            }}
          /> */}
        </div>
      </>
    );

    return(
        <TableStyles>
          <DataTable
              header={header}
              emptyMessage="nodata"
              loading={loading}
              // className="datatable-responsive"
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
              <Column
                filter  
                // filterPlaceholder="userId"
                // className="datatable-filter-column" 
                field="userId"
                sortable 
                header="userId">
              </Column>

              <Column 
                filter  
                filterPlaceholder="userId"
                className="datatable-filter-column" 
                field="userId"
                sortable 
                header="userId"
              ></Column>

            {/* 
            {/* {columnFirstname ? <Column 
              filter  
              filterPlaceholder="firstname"
              className="datatable-filter-column" 
              field="firstname"
              sortable 
              header="firstname"
            ></Column> : null }

            {columnLastname ? <Column 
              filter 
              filterPlaceholder="lastname"
              className="datatable-filter-column"
              field="lastname" 
              sortable 
              header="lastname"
            ></Column> : null }

            {columnTimeofbirth ? <Column 
              filter 
              filterPlaceholder="timeofbirth"
              className="datatable-filter-column"
              field=""
              sortable 
              header="timeofbirth"
            ></Column> : null}
            
            {columnPersonalcode ? <Column 
              filter 
              filterPlaceholder="identitycode"
              className="datatable-filter-column"    
              field="identifiers" 
              sortable 
              header="identitycode"
              body={identityTemplate}
            ></Column> : null}

            {columnPersonalcodeCountry ? <Column 
              filter 
              filterPlaceholder="identitycode_country"
              className="datatable-filter-column"
              field="identifiers" 
              sortable 
              header="identitycode_country"
              // body={identityCountryTemplate}
              body={countryBodyTemplate}
            ></Column> : null}
            
            {columnDocumentNumber ? <Column 
              filter 
              filterPlaceholder="document_number"
              className="datatable-filter-column"
              field="identifiers" 
              sortable 
              header="document_number"
              body={documentTemplate}
            ></Column> : null}
            
            {columnDocumentCountry ? <Column 
              filter 
              filterPlaceholder="document_country"
              className="datatable-filter-column"
              field="identifiers" 
              sortable 
              header="document_country"
              body={documenrCountryTemplate}
            ></Column> : null}

            {columnTelephoneNumber ? <Column 
              filter 
              filterPlaceholder="contactPhone"
              className="datatable-filter-column"
              field="mobilephone" 
              sortable 
              header="contactPhone"
            ></Column> : null}
            
            {columnEmail ? <Column 
              filter 
              filterPlaceholder="email"
              className="datatable-filter-column"
              field="email" 
              sortable 
              header="email"
            ></Column> : null} */}

          </DataTable>
        </TableStyles>
    );
};

export default Table;



// {
//   "firstname": "Peeter-kalle",
//   "lastname": "Meeter",
//   "gender": "M",
//   "birthdate": "2000-06-01T00:00:00.000Z",
//   "mobilephone": "521212129",
//   "email": "t6n@hotmail.com",
//   "originCountryCode": "EE",
//   "partyId": 13,
//   "identifiers": [
//       {
//           "type": "document_number",
//           "countryCode": "EE",
//           "code": "KB012121213",
//           "createdDtime": "2022-06-02T05:05:09.052Z",
//           "modifiedDtime": "2022-06-02T05:05:09.052Z"
//       },
//       {
//           "type": "document_number",
//           "countryCode": "EE",
//           "code": "KB012121212",
//           "createdDtime": "2022-06-02T05:03:56.034Z",
//           "modifiedDtime": "2022-06-02T05:03:56.034Z"
//       }
//   ],
//   "createdDtime": "2022-06-02T05:03:56.052Z",
//   "modifiedDtime": "2022-06-02T05:03:56.052Z"
// }