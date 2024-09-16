import { useState } from "react";
function App() {
  const [range, setRange] = useState(0);
  const [editedRow, setEditedRow] = useState(null);
  const [sorting, setSorting] = useState(true);
  const [currentSort, setCurrentSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const data = [
    {
      id: 1,
      name: "Cameron Williamson",
      email: "cameron.wiliamson@example.com",
      title: "Software Developer",
    },
    {
      id: 2,
      name: "Jenny Wilson",
      email: "jenny.wilson@example.com",
      title: "Project Manager",
    },
    {
      id: 3,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Marketing Coordinator",
    },
    {
      id: 4,
      name: "Wade Warren",
      email: "wade.warren@example.com",
      title: "Software Tester",
    },
    {
      id: 5,
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Web Designer",
    },
    {
      id: 6,
      name: "Kristin Watson",
      email: "kristin.watson@example.com",
      title: "Marketing Coordinator",
    },
    {
      id: 7,
      name: "Esther Howard",
      email: "esther.howard@example.com",
      title: "Web Designer",
    },
    {
      id: 8,
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      title: "UI/UX Designer",
    },
    {
      id: 9,
      name: "Ralph Edwards",
      email: "ralph.edwards@example.com",
      title: "Software Tester",
    },
    {
      id: 10,
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      title: "Ethical Hacker",
    },
    {
      id: 11,
      name: "Willie Jennings",
      email: "willie.jennings@example.com",
      title: "Team Leader",
    },
    {
      id: 12,
      name: "Neveah Simmons",
      email: "neveah.simmons@example.com",
      title: "Team Leader",
    },
    {
      id: 13,
      name: "Theresa Webb",
      email: "theresa.webb@example.com",
      title: "Software Tester",
    },
    {
      id: 14,
      name: "Debbe Baker",
      email: "debbe.baker@example.com",
      title: "Software Developer",
    },
    {
      id: 15,
      name: "Ronald Richards",
      email: "ronald.richards@example.com",
      title: "Software Developer",
    },
    {
      id: 16,
      name: "Deanna Curtis",
      email: "deanna.curtis@example.com",
      title: "Scrum Master",
    },
    {
      id: 17,
      name: "Felicia Reid",
      email: "felicia.reed@example.com",
      title: "Ethical Hacker",
    },
    {
      id: 18,
      name: "Jessie Alexander",
      email: "jessie.alexander@example.com",
      title: "Project Manager",
    },
    {
      id: 19,
      name: "Sam Smith",
      email: "sam.smith@example.com",
      title: "Ethical Hacker",
    },
    {
      id: 20,
      name: "Eleanor Rigby",
      email: "eleanor.rigby@example.com",
      title: "UI/UX Designer",
    },
    {
      id: 21,
      name: "Devon Lane",
      email: "devon.lane@example.com",
      title: "Team Leader",
    },
    {
      id: 22,
      name: "Guy Hawkins",
      email: "guy.hawkins@example.com",
      title: "Team Leader",
    },
    {
      id: 23,
      name: "Jim Parks",
      email: "jim.parks@example.com",
      title: "Ethical Hacker",
    },
    {
      id: 24,
      name: "Susanne Ford",
      email: "susanne.ford@example.com",
      title: "Software Developer Manager",
    },
    {
      id: 25,
      name: "Kathryn Murphy",
      email: "kathryn.murphy@example.com",
      title: "Project Manager",
    },
    {
      id: 26,
      name: "Cody Fisher",
      email: "cody.fisher@example.com",
      title: "Software Developer",
    },
    {
      id: 27,
      name: "Jane Cooper",
      email: "jane.cooper@example.com",
      title: "Software Tester",
    },
    {
      id: 28,
      name: "Karen MacAfee",
      email: "karen.macafee@example.com",
      title: "UI/UX Designer",
    },
    {
      id: 29,
      name: "Dianne Russell",
      email: "dianne.russell@example.com",
      title: "Ethical Hacker",
    },
    {
      id: 30,
      name: "Bessie Cooper",
      email: "bessie.cooper@example.com",
      title: "Scrum Master",
    },
  ];
  const [dataa, setDataa] = useState(data);
  const handleChange = () => {
    if (range + 10 < data.length) {
      setRange(range + 10);
      setCurrentPage(currentPage + 1);
    } else {
      setRange(0);
      setCurrentPage(1);
    }
  };
  const handleChangePrev = () => {
    if (range > 0) {
      setRange(range - 10);
      setCurrentPage(currentPage - 1);
    } else {
      setRange(data.length - 10);
      setCurrentPage(Math.ceil(data.length / 10));
    }
  };
  const handleChangeEdit = (id) => {
    if (id === editedRow) {
      setEditedRow(null);
    } else {
      setEditedRow(id);
    }
    console.log("b");
  };
  const handleSort = (field) => {
    setSorting(!sorting);
    setCurrentSort(field);
    setDataa((prevData) => {
      const sortedData = [...prevData].sort((a, b) =>
        typeof a[field] === "string"
          ? a[field].localeCompare(b[field])
          : a[field] - b[field]
      );
      const sortedData2 = [...prevData].sort((a, b) =>
        typeof b[field] === "string"
          ? b[field].localeCompare(a[field])
          : b[field] - a[field]
      );

      return sorting ? sortedData : sortedData2;
    });
  };
  return (
    <div className="wrapper">
      <table cellpadding="0" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th className="header__id">
              ID
              <button
                className={
                  currentSort === "id"
                    ? sorting
                      ? "sort ascending"
                      : "sort descending"
                    : "sort"
                }
                onClick={() => {
                  handleSort("id");
                }}
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="ascending"
                    d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                  />
                  <path
                    className="descending"
                    d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Name
              <button
                className={
                  currentSort === "name"
                    ? sorting
                      ? "sort ascending"
                      : "sort descending"
                    : "sort"
                }
                onClick={() => {
                  handleSort("name");
                }}
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="ascending"
                    d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                  />
                  <path
                    className="descending"
                    d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Email Address
              <button
                className={
                  currentSort === "email"
                    ? sorting
                      ? "sort ascending"
                      : "sort descending"
                    : "sort"
                }
                onClick={() => {
                  handleSort("email");
                }}
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="ascending"
                    d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                  />
                  <path
                    className="descending"
                    d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                  />
                </svg>
              </button>
            </th>
            <th>
              Job Title
              <button
                className={
                  currentSort === "title"
                    ? sorting
                      ? "sort ascending"
                      : "sort descending"
                    : "sort"
                }
                onClick={() => {
                  handleSort("title");
                }}
              >
                <svg
                  width="17"
                  height="21"
                  viewBox="0 0 17 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="ascending"
                    d="M16.9706 8.48528L8.48529 0L9.29832e-06 8.48528H16.9706Z"
                  />
                  <path
                    className="descending"
                    d="M1.00136e-05 12.4853L8.48529 20.9706L16.9706 12.4853L1.00136e-05 12.4853Z"
                  />
                </svg>
              </button>
            </th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {dataa.slice(range, range + 10).map((dataItem) => (
            <tr
              key={dataItem.id}
              className={dataItem.id === editedRow ? "edit" : ""}
            >
              <td>{dataItem.id}</td>
              <td className="name">
                <input
                  type="text"
                  disabled={dataItem.id === editedRow ? "" : "disabled"}
                  name={`person-name-${dataItem.id}`}
                  value={dataItem.name}
                />
              </td>
              <td>
                <input
                  type="text"
                  disabled={dataItem.id === editedRow ? "" : "disabled"}
                  name={`person-email-${dataItem.id}`}
                  value={dataItem.email}
                />
              </td>
              <td>
                <input
                  type="text"
                  disabled={dataItem.id === editedRow ? "" : "disabled"}
                  name={`person-title-${dataItem.id}`}
                  value={dataItem.title}
                />
              </td>
              <td>
                <button
                  className="update"
                  name={`person-update-${dataItem.id}`}
                  id={`personUpdate${dataItem.id}`}
                  onClick={() => handleChangeEdit(dataItem.id)}
                >
                  <img src="./update.svg" alt="Update" className="update" />
                </button>
                <button
                  className="edit"
                  name={`person-edit-${dataItem.id}`}
                  id={`personEdit${dataItem.id}`}
                  onClick={() => handleChangeEdit(dataItem.id)}
                >
                  <img src="./edit.svg" alt="Edit" className="edit" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colspan="2">{data.length} Results</td>
            <td colspan="3">
              <div className="pagination edit">
                <button className="previous" id="previous">
                  <img
                    src="./chevron--left.svg"
                    alt="Previous"
                    onClick={handleChangePrev}
                  />
                </button>

                <input
                  type="text"
                  name="currentPage"
                  value={currentPage}
                  id="currentPage"
                />

                <span>&nbsp;of&nbsp;</span>
                <span id="totalPages">{Math.ceil(data.length / 10)}</span>

                <button className="next" id="next" onClick={handleChange}>
                  <img src="./chevron--right.svg" alt="Next" />
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
