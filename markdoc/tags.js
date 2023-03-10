import { Tag } from '@markdoc/markdoc';
import { Callout } from '@/components/Callout'
import { Tabs } from '@/components/Tabs'
import { Tab } from '@/components/Tab'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  tab: {
    render: Tab,
    attributes: {
      label: {
        type: String
      }
    }
  },
  tabs: {
    render: Tabs,
    attributes: {},
    transform(node, config) {
      const labels = node
        .transformChildren(config)
        .filter((child) => child && child.name === 'Tab')
        .map((tab) => (typeof tab === 'object' ? tab.attributes.label : null));
  
      return new Tag(this.render, { labels }, node.transformChildren(config));
    }
  }
}

export default tags
