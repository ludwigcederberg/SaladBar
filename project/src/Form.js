export default function Form ({genres, keywords}) {

  const numberOfCheckboxes = 16;
  const checkboxesAndLabels = [];

  for (let i = 1; i <= numberOfCheckboxes; i++) {
    const checkboxId = `btn-check-outlined${i}`;
    const labelFor = `btn-check-outlined${i}`;

    checkboxesAndLabels.push(
      <span key={i}>
        <input type="checkbox" className="btn-check" id={checkboxId} autoComplete="off" />
        <label className="btn btn-outline-primary" htmlFor={labelFor} value={"Keyword " + i}>
          Keyword {i}
        </label>
        {'  '}
      </span>
    );
  }

  console.log(genres);

  return (
    <div className="container-fluid inline">
      <form>
        <div className="checkbox-row">
          {keywords.map(x => <span key={x}>
            <input type="checkbox" className="btn-check" id={x} autoComplete="off" />
            <label className="btn btn-outline-primary" htmlFor={x} value={x}>
              {x}
            </label>
          </span>)}
        </div>
        <br/>
        <br/>
        <div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
            {genres.map(x => <option value={x}>{x}</option>)}
          </select>
        <label for="floatingSelect">Genre</label>
        </div>

      </form>
    </div>
  )
}