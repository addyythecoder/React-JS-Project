import "./Men.css";
import { useDispatch, useSelector } from "react-redux";
import { DeleteMenData, filterData } from "../Services/Action/Action";
import { useNavigate } from "react-router";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Men = () => {
  const { men } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState({
    category: true,
    brand: false,
    pattern: false,
  });

  const [filter, setFilter] = useState({
    categories: [],
    Brand: [],
    pattern: [],
  });

  const handleChange = (type, value) => {
    setFilter((prev) => {
      const selected = prev[type];
      const updated = selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value];
      const newFilter = { ...prev, [type]: updated };
      dispatch(filterData(newFilter));
      return newFilter;
    });
  };

  const handleClearAll = () => {
    const cleared = { categories: [], Brand: [], pattern: [] };
    setFilter(cleared);
    dispatch(filterData(cleared));
  };

  const handleEdit = (id) => navigate(`/Edit/${id}`);
  const handleDelete = (id) => dispatch(DeleteMenData(id));

  const categoryOptions = ["Bootcut Jeans", "Straight Fit", "Oversized", "Denim"];
  const brandOptions = ["Raymond", "USPA", "Levis", "Mufti"];
  const patternOptions = ["Cotton", "Linen", "Polyester", "Wool"];

  return (
    <section className="men-section">
      <div className="filter-sidebar">
        <div className="filter-head">
          <h5>Filters</h5>
          <button onClick={handleClearAll} className="reset-btn">
            Reset
          </button>
        </div>

        <div className="filter-divider"></div>

        {[
          { title: "Category Type", key: "category", options: categoryOptions, type: "categories" },
          { title: "Brand", key: "brand", options: brandOptions, type: "Brand" },
          { title: "Pattern", key: "pattern", options: patternOptions, type: "pattern" },
        ].map(({ title, key, options, type }) => (
          <div key={key} className="filter-box">
            <div
              className="filter-title"
              onClick={() => setShow((prev) => ({ ...prev, [key]: !prev[key] }))}
            >
              <h6>{title}</h6>
              <IoChevronDown className={`chevron ${show[key] ? "open" : ""}`} />
            </div>
            {show[key] && (
              <div className="filter-options">
                {options.map((opt) => (
                  <label key={opt}>
                    <input
                      type="checkbox"
                      checked={filter[type].includes(opt)}
                      onChange={() => handleChange(type, opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="men-grid">
        {men.length ? (
          men.map((v) => (
            <div key={v.id} className="men-item">
              <div className="img-wrap">
                <img src={v.image} alt={v.name} />
                <CiHeart className="like-icon" />
              </div>
              <div className="men-info">
                <h6>{v.name}</h6>
                <p className="desc">{v.desc}</p>
                <div className="price">₹ {v.price}</div>
                <div className="meta">
                  <span>{v.categoryType}</span> • <span>{v.brand}</span> •{" "}
                  <span>{v.pattern.join(", ")}</span>
                </div>
                <div className="action-btns">
                  <button className="edit" onClick={() => handleEdit(v.id)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDelete(v.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-items">No matching items</p>
        )}
      </div>
    </section>
  );
};

export default Men;
