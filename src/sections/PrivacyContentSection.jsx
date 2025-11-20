import { useLocale } from '../i18n.jsx';

const renderRichText = (text) => {
  if (!text) return null;
  const segments = text.split('**');
  return segments.map((segment, index) =>
    index % 2 === 1 ? (
      <span key={index} className="font-semibold text-[#0b2c3c]">
        {segment}
      </span>
    ) : (
      <span key={index}>{segment}</span>
    )
  );
};

export default function PrivacyContentSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          {t.privacy?.content?.map((section, index) => (
            <div key={index} className="mb-10 border-b border-slate-200 pb-10 last:border-b-0 last:pb-0 sm:mb-14">
              {section.title && (
                <h2 className="mb-6 text-lg font-semibold leading-relaxed text-[#0b2c3c] sm:text-xl">
                  {section.title}
                </h2>
              )}

              {section.description && (
                <p className="mb-6 text-lg leading-relaxed text-[#1f3b4d] sm:text-xl">
                  {renderRichText(section.description)}
                </p>
              )}

              {section.paragraphs && (
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="text-lg leading-relaxed text-[#1f3b4d] sm:text-xl">
                      {renderRichText(paragraph)}
                    </p>
                  ))}
                </div>
              )}

              {section.items && (
                <ul className="mt-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-lg leading-relaxed text-[#1f3b4d] sm:text-xl">
                      {renderRichText(item)}
                    </li>
                  ))}
                </ul>
              )}

              {section.blocks && (
                <div className="space-y-8">
                  {section.blocks.map((block, blockIndex) => (
                    <div key={blockIndex}>
                      {block.title && (
                        <p className="mb-4 text-lg font-semibold leading-relaxed text-[#0b2c3c] sm:text-xl">
                          {renderRichText(block.title)}
                        </p>
                      )}
                      {block.items && (
                        <ul className="space-y-4">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-lg leading-relaxed text-[#1f3b4d] sm:text-xl">
                              {renderRichText(item)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {t.privacy?.contact && (
            <div className="mt-12 rounded-2xl bg-slate-50 p-6 sm:p-8 lg:p-10">
              <p className="text-lg leading-relaxed text-[#1f3b4d] sm:text-xl">
                {t.privacy?.contact}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

