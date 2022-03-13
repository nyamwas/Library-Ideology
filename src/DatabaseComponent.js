import React from 'react'
import myDatabaseStyles from './myDatabaseStyles.js'
import myDatabaseContent from './myDatabaseContent.js'

const DatabaseComponent = (props) => {
    return(
        <div style={myDatabaseStyles.database.root}>
            <center>
                <button style={myDatabaseStyles.database.tablinks.relation}>
                    {props.tablinks.relation}
                </button>
                <button style={myDatabaseStyles.database.tablinks.candidateKey}>
                    {props.tablinks.candidateKey}
                </button>
                <button style={myDatabaseStyles.database.tablinks.multivaluedAttributes}>
                    {props.tablinks.multivaluedAttributes}
                </button>
                <button style={myDatabaseStyles.database.tablinks.inconsistencies}>
                    {props.tablinks.inconsistencies}
                </button>
                <button style={myDatabaseStyles.database.tablinks.firstNormalForm}>
                    {props.tablinks.firstNormalForm}
                </button>
                <button style={myDatabaseStyles.database.tablinks.secondNormalForm}>
                    {props.tablinks.secondNormalForm}
                </button>
            </center>
            {props.relation.isShowing &&
                <div style={myDatabaseStyles.card}>
                    <p>A relation refers to set of tuples where each member of one domain is a member of the other domain</p>
                    <p>For example, Employee ID is related to salary as candidate keys for employee by working in combination</p>
                    <p>CREATE TABLE empTbl (EmployeeId varchar(10), Salary varchar(10), PRIMARY KEY(EmployeeId));</p>
                </div>
            }
            {props.candidateKey.isShowing &&
                <div style={myDatabaseStyles.card}>
                    <p>A candidate key refers to a field that uniquely identifies records in a table</p>
                    <P>For example, Employee ID is the candidate key in empTbl</p>
                    <p>CREATE TABLE empTbl (EmployeeId varchar(10), Salary varchar(10), PRIMARY KEY(EmployeeId));</p>
                </div>
            }
            {props.multivaluedAttribute.isShowing &&
                <div style={myDatabaseStyles.card}>
                    <p>A multivalued attribute refers to an attribute that can have more than one value associated with the key of the entity</p>
                    <p>For example, gender in tbl is a multivalued attribute</p>
                    <p>CREATE tbl (gender varchar(10), name varchar(10), EmpId varchar(10), PRIMARY KEY(EmpId));</p>
                </div>
            }
            {props.inconsistencies.isShowing &&
                <div style={myDatabaseStyles.card}>
                    <p>Inconsistencies refer to discrepancies among records within a table, they can be controlled by extending values to empty cells</p>
                    <p>For example, empty cells in a tbl can be filled with 0</p>
                    <p>
                        CREATE TABLE tbl (age int(10));
                        INSERT INTO tbl SET age = 18 WHERE age = '';
                    </p>
                </div>
            }
            {props.firstNormalForm.isShowing &&
                <div style={myDatabaseStyles.card}>
                    <p>First normal form refers to relation between candidate keys where no multivalued attributes exist</p>
                    <p>For example, in tbl age field is different for each record</p>
                    <p>
                        CREATE TABLE tbl (empId varchar(10), age int(10), PRIMARY KEY empId);
                        UPDATE tbl SET age = 18 WHERE empId = 1;
                        UPDATE tbl SET age = 19 WHERE empId = 2;
                        UPDATE tbl SET age = 18 WHERE empId = 3;
                    </p>
                </div>
            }
            {props.secondNormalForm.isShowing &&
                <div style={myDatabaseStyles.card}>
                    <p>Second normal form refers to a relation where every non key attribute is fully functionally dependent on the primary key</p>
                    <p>For example, in tbl skill is dependent on empId</p>
                    <p>
                        CREATE TABLE tbl (empId varchar(10), skill varchar(10));
                        INSERT INTO tbl (empId, skill)
                    </p>
                </div>
            }
        </div>
    )
}
export default DatabaseComponent