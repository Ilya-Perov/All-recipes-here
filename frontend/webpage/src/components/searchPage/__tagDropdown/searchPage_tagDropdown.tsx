interface TagDropdownProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string) => void;
}

const TagDropdown = (props: TagDropdownProps) => {
  const { tags, selectedTag, onTagSelect } = props;
  return (
    <select
      value={selectedTag || ''}
      onChange={(e) => onTagSelect(e.target.value)}
      className="tagDropdown"
    >
      <option value="">Все теги</option>
      {tags.map((tag) => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
};

export default TagDropdown;
