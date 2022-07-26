// import Autosuggest from 'react-autosuggest';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { selectors as UserTasksSelectors } from "../store/slices/userTasks";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import MiniSearch from "minisearch";
import { filter } from "lodash";
// import Select from 'react-select'
// import CreatableSelect from 'react-select/creatable';
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { actions as userTasksActions } from "../store/slices/userTasks";
import { useTranslation } from 'react-i18next';

export const SearchBar = (props:any) => {
  //Get all experiments for index
  const tasks = props.tasks //useSelector(UserTasksSelectors.getTasks);

  // const [suggestions, setSuggestions] = React.useState(experiments);
  const [value, setValue] = React.useState("");
  const [searchEngine, setSearchEngine] = React.useState(null as any);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation('frontend', { useSuspense: false });

  React.useEffect(() => {
    console.log("in constructor");
    const tokenize = (x: any) => x.split(/\W+/);

    setSearchEngine(
      new MiniSearch({
        fields: ["goal.name","goal.description"], // fields to index for full-text search
        searchOptions: {combineWith:'AND'},
        // Custom extractField function that can deal with arrays
        extractField: (document, fieldName) => {
          
          if (Array.isArray(document[fieldName])) {
            //console.log("Trovato_array:",fieldName, document[fieldName]);
            //const result = document[fieldName].join(" ");

            const result = document[fieldName].map((obj:any,index:number) => {
              if (typeof(obj)=='object') return Object.values(obj).join(' ')
              else return obj
            }) 
           // console.log("Trovato_array_res:", result);
            return result
          } 
          else {
            
            //return document[fieldName];
            const result = fieldName.split('.').reduce((doc, key) => doc && doc[key], document)
            //console.log("SB:Trovato campo per field name:>>",fieldName, result);
            return result;
          }
        },
        storeFields: ["id","goal.name",  "goal.description"], // fields to return with search results
      })
    );
    return () => {};
  }, []);

  
  React.useEffect(() => {
    console.log("with tasks: ", Object.values(tasks));
    if (searchEngine != null) {
      // Index all documents
      searchEngine.addAll(Object.values(tasks));

      let results = searchEngine.search("onde");
      console.log("with results: ", results);
    }

    return () => {};
  }, [tasks, searchEngine]);
 

  const onChange = (e: any) => {
    console.log("in on change with ", e.target.value);
    const value = e.target.value;
    setValue(value);
    if (value !== "") {
      console.log("in onSUggestionFethRequest", value);
      const results = searchEngine.search(value, { prefix: true });
      console.log("with search result: ", value, results);
      const scoredResult = filter(results, (result: any) => {
        console.log("check score: ", result, result.score > 0);
        return result.score > 0 ? true : false;
      });
      // setSuggestions(result);
      console.log("MINISEARCH result: ", results);
      console.log("scored result: ", scoredResult);
      dispatch(userTasksActions.setFilteredIds(results));
    } else {
      // dispatch(CatalogActions.setFilteredIds(null));
      dispatch(userTasksActions.clearFilter(null));
    }
  };

  
  return (
    <div
      style={{
        width: "100%",
        border: "0px solid #000",
        height: 50,
        marginBottom: 20,
      }}
    >

      <InputGroup>
        <Input
          value={value}
          onChange={onChange}
          placeholder={t("search_tasks")}
        />
        <InputGroupAddon addonType="append">
          {value == "" ? (
            <Button style={{ width: 50 }} color="primary">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: 20 }}
                color="white"
              />
            </Button>
          ) : (
            <Button
              style={{ width: 50 }}
              onClick={() => {
                dispatch(userTasksActions.clearFilter(null));
                setValue("");
              }}
              color="primary"
            >
              <FontAwesomeIcon
                icon={faTimes}
                style={{ fontSize: 20 }}
                color="white"
              />
            </Button>
          )}
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
