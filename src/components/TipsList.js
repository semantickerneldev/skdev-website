import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Link from '@docusaurus/Link';

export default function TipsList() {
  const { siteConfig } = useDocusaurusContext();
  const allDocs = useAllDocsData();
  
  // Get the default docs plugin data
  const defaultDocsPluginId = Object.keys(allDocs)[0];
  const docsData = allDocs[defaultDocsPluginId];
  
  // Filter and sort tips
  const tipsData = Object.values(docsData.versions[0].docs)
    .filter(doc => doc.id.startsWith('tips/'))
    .map(tip => ({
      number: parseInt(tip.frontMatter.tip_number || 0),
      title: tip.title,
      permalink: tip.permalink,
    }))
    .sort((a, b) => a.number - b.number);

  return (
    <div className="tips-list">
      {tipsData.length > 0 ? (
        tipsData.map(tip => (
          <div key={tip.number} className="tip-item">
            <Link to={tip.permalink}>
              Tip {tip.number} - {tip.title}
            </Link>
          </div>
        ))
      ) : (
        <p>No tips found. Add your first tip in the docs/tips directory!</p>
      )}
    </div>
  );
}
