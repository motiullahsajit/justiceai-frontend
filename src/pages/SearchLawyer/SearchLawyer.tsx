import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  faChevronDown,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { filters, singleFilter } from "./FilterData";
import LawyerCardSearch from "../../components/LawyerCardSearch/LawyerCardSearch";
import "./SearchLawyer.scss";

interface Option {
  value: string;
  label: string;
  checked?: boolean;
}

interface Section {
  id: string;
  name: string;
  options: Option[];
}

const SearchLawyer = () => {
  const [filteredPrice, setFilteredPrice] = useState<number>(0);
  const handleFileredPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setFilteredPrice(isNaN(value) ? 0 : value);
  };

  const location = useLocation();
  const navigate = useNavigate();

  const handleFilter = (value: string, sectionId: string) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValue = searchParams.getAll(sectionId);
    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValue.push(value);
    }
    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleRadioFilterChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    sectionId: string
  ) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <main className="flex justify-center">
      <section className="sidebar-container flex justify-center">
        <div className="filters-container">
          <div className="py-10 flex justify-between items-center">
            <h4 className="filter-title">Filters</h4>
            <button className="reset-button">Reset</button>
          </div>
          <div className="py-10 filtered-price">
            <input type="range" onInput={handleFileredPriceInput} />
            <div className="flex justify-end">
              <span>{filteredPrice === 0 ? 10000 : filteredPrice * 10000}</span>
            </div>
          </div>
          <form className="hidden lg:block">
            {filters.map((section: Section) => (
              <div className="space-y-4">
                {section.options.map((option, optionIdx) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      onChange={() => handleFilter(option.value, section.id)}
                      id={`filter-${section.id}-${optionIdx}`}
                      name={`${section.id}[]`}
                      defaultValue={option.value}
                      type="checkbox"
                      defaultChecked={option.checked}
                      className="h-4 w-4 rounded border-gray-300 checkbox"
                    />
                    <label
                      htmlFor={`filter-${section.id}-${optionIdx}`}
                      className="ml-2"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            ))}
            {singleFilter.map((section: Section) => (
              <section className="single-filter">
                <h2>{section.name}</h2>
                <div className="space-y-4">
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      {section.options.map(
                        (option: Option, optionIdx: number) => (
                          <FormControlLabel
                            key={option.value}
                            onChange={(
                              e: React.SyntheticEvent<Element, Event>
                            ) => {
                              handleRadioFilterChange(
                                e as React.ChangeEvent<HTMLInputElement>,
                                section.id
                              );
                            }}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                            className="radio-input"
                          />
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                </div>
              </section>
            ))}
          </form>
        </div>

        <div className="lg:col-span-4 w-full p-5">
          <div className="info flex justify-between mt-5 mb-5">
            <div className="count">
              <span>942</span> Lawyers found nearby
            </div>
            <div>
              <FontAwesomeIcon className="location" icon={faLocationDot} />{" "}
              Dhaka, Bangladesh <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
          <LawyerCardSearch />
        </div>
      </section>
    </main>
  );
};

export default SearchLawyer;
