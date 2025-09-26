import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PageBanner from "../components/Banner/PageBanner";
import BlogCard from "../components/BlogCard";
import SearchBox from "../components/Sidebar/SearchBox";
import Categories from "../components/Sidebar/Categories";
import RecentNews from "../components/Sidebar/RecentNews";
import Tags from "../components/Sidebar/Tags";
import SocialLinks from "../components/Sidebar/SocialLinks";
import PaginationBar from "../components/PaginationBar";
import { posts as ALL_POSTS, allTags } from "../data/blogData";


export default function BlogRight() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 3;

  const categories = useMemo(() => {
    const map = new Map();
    ALL_POSTS.forEach(p => map.set(p.category, (map.get(p.category) || 0) + 1));
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_POSTS.filter(p => {
      const matchesQ = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      const matchesC = !activeCategory || p.category === activeCategory;
      return matchesQ && matchesC;
    });
  }, [query, activeCategory]);

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const paged = filtered.slice(start, start + perPage);

  // recent = top 3 by date
  const recent = useMemo(() => [...ALL_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3), []);

  // reset page when filters change
  const handleSearchChange = (val) => { setQuery(val); setPage(1); };
  const handleCategoryChange = (cat) => { setActiveCategory(cat); setPage(1); };

  return (
    <>
      <PageBanner subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
      <Container className="py-4">
        <Row className="g-4">
          <Col lg={8}>
            {paged.map(p => <BlogCard key={p.id} post={p} />)}
            <PaginationBar total={total} perPage={perPage} current={page} onChange={setPage} />
          </Col>
          <Col lg={4}>
            <SearchBox value={query} onChange={handleSearchChange} onSubmit={() => {}} />
            <Categories items={categories} active={activeCategory} onSelect={handleCategoryChange} />
            <RecentNews items={recent} />
            <Tags tags={allTags} />
            <SocialLinks />
          </Col>
        </Row>
      </Container>
    </>
  );
}
