/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

import React from 'react';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
export const onRenderBody = ({ setHtmlAttributes, setPostBodyComponents, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'en' });

  // Add optimized font loading
  setHeadComponents([
    // 1. Preconnect to Google Fonts
    <link 
      key="google-fonts-preconnect"
      rel="preconnect" 
      href="https://fonts.googleapis.com" 
    />,
    <link 
      key="google-fonts-preconnect-static"
      rel="preconnect" 
      href="https://fonts.gstatic.com" 
      crossOrigin="anonymous"
    />,
    
    // 2. Load font stylesheet normally (blocking but ensures font is available)
    <link
      key="google-fonts-stylesheet"
      href="https://fonts.googleapis.com/css2?family=Prompt:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />,
  ]);

  setPostBodyComponents([
    <script
      key="whatconverts-script"
      dangerouslySetInnerHTML={{
        __html: `
          var $wc_load=function(a){return JSON.parse(JSON.stringify(a))},$wc_leads=$wc_leads||{doc:{url:$wc_load(document.URL),ref:$wc_load(document.referrer),search:$wc_load(location.search),hash:$wc_load(location.hash)}};
          
          function loadWhatConvertsScript() {
            var script = document.createElement('script');
            script.src = '//s.ksrndkehqnwntyxlhgto.com/112116.js';
            script.async = true;
            document.body.appendChild(script);
          }
          
          window.addEventListener('load', function() {
            setTimeout(loadWhatConvertsScript, 1000); // Adjust the delay as needed
          });
        `,
      }}
    />,
    // <script
    //   key="livechat-script"
    //   dangerouslySetInnerHTML={{
    //     __html: `
    //       window.__lc = window.__lc || {};
    //       window.__lc.license = 17710971;
    //       (function(n, t, c) {
    //         function i(n) { return e._h ? e._h.apply(null, n) : e._q.push(n); }
    //         var e = { _q: [], _h: null, _v: "2.0", on: function() { i(["on", c.call(arguments)]); }, once: function() { i(["once", c.call(arguments)]); }, off: function() { i(["off", c.call(arguments)]); }, get: function() { if (!e._h) throw new Error("[LiveChatWidget] You can't use getters before load."); return i(["get", c.call(arguments)]); }, call: function() { i(["call", c.call(arguments)]); }, init: function() { var n = t.createElement("script"); n.async = true; n.type = "text/javascript"; n.src = "https://cdn.livechatinc.com/tracking.js"; t.head.appendChild(n); } };
    //         !n.__lc.asyncInit && e.init();
    //         n.LiveChatWidget = n.LiveChatWidget || e;
    //       })(window, document, [].slice);
    //     `,
    //   }}
    // />,
    // <noscript key="livechat-noscript">
    //   <a href="https://www.livechat.com/chat-with/17710971/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow noreferrer" target="_blank">LiveChat</a>
    // </noscript>,
    // <script
    //   key="crisp-script"
    //   dangerouslySetInnerHTML={{
    //     __html: `
    //       window.$crisp=[];
    //       window.CRISP_WEBSITE_ID="50372435-d072-4344-bbbf-dd173ff9ee9e";
    //       (function(){
    //         d=document;
    //         s=d.createElement("script");
    //         s.src="https://client.crisp.chat/l.js";
    //         s.async=1;
    //         d.getElementsByTagName("head")[0].appendChild(s);
    //       })();
    //     `,
    //   }}
    // />,
  ]);
};
