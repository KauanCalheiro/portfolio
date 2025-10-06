import type { TimelineItem } from "@nuxt/ui";

export const useTimeline = (): TimelineItem[] => {
    return [
        {
            title: 'timeline.items.exchange.title',
            description: 'timeline.items.exchange.description',
            date: 'timeline.items.exchange.date',
            icon: 'mdi:globe'
        },
        {
            title: 'timeline.items.systems-analyst.title',
            description: 'timeline.items.systems-analyst.description',
            date: 'timeline.items.systems-analyst.date',
            icon: 'mdi:monitor-dashboard'
        },
        {
            title: 'timeline.items.mid-developer.title',
            description: 'timeline.items.mid-developer.description',
            date: 'timeline.items.mid-developer.date',
            icon: 'mdi:code-braces-box'
        },
        {
            title: 'timeline.items.junior-developer.title',
            description: 'timeline.items.junior-developer.description',
            date: 'timeline.items.junior-developer.date',
            icon: 'mdi:code-greater-than-or-equal'
        },
        {
            title: 'timeline.items.scholarship.title',
            description: 'timeline.items.scholarship.description',
            date: 'timeline.items.scholarship.date',
            icon: 'mdi:backpack'
        },
        {
            title: 'timeline.items.software-engineering.title',
            description: 'timeline.items.software-engineering.description',
            date: 'timeline.items.software-engineering.date',
            icon: 'mdi:school'
        },
        {
            title: 'timeline.items.industrial-automation.title',
            description: 'timeline.items.industrial-automation.description',
            date: 'timeline.items.industrial-automation.date',
            icon: 'mdi:robot-industrial'
        },
    ]
}
