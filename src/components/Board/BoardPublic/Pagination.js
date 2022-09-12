import styled from "styled-components";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <Nav>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <HiOutlineChevronLeft size={20} />
      </Button>
      {Array(numPages < 11 ? numPages : 10)
        .fill()
        .map((_, i) => (
          <Button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        <HiOutlineChevronRight size={20} />
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Button = styled.button`
  border: 1px solid #f0f0f0;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  padding: 8px;
  margin: 0;
  background: transparent;
  color: rgba(79, 79, 79, 1);
  font-weight: bold;
  font-size: 15px;
  line-height: 150%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: rgba(79, 79, 79, 1);
    font-weight: bold;
    cursor: pointer;
  }

  &[disabled] {
    display: none;
    color: rgba(79, 79, 79, 0.2);
    cursor: not-allowed;
    transform: revert;
  }

  &[disabled]:hover {
    color: rgba(79, 79, 79, 0.2);
    cursor: not-allowed;
    transform: revert;
  }

  &[aria-current] {
    background-color: #dcf6fc;
    color: rgba(79, 79, 79, 1);
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
