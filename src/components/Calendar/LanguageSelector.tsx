import React from "react";
import "./styles/index.scss";

interface LanguageSelectorProps {
  currentLocale: string;
  onChange: (locale: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLocale,
  onChange,
}) => {
  const languages = [
    { value: "zh-CN", label: "中文" },
    { value: "en-US", label: "English" },
    { value: "jp-jp", label: "日本語" },
  ];

  return (
    <div className="calendar-language-selector">
      <select
        value={currentLocale}
        onChange={(e) => onChange(e.target.value)}
        className="calendar-language-selector-dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
