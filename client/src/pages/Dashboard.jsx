import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Plus, Clock, CheckCircle2, MoreHorizontal } from 'lucide-react';

const recentActivity = [
  { id: 1, action: "assigned you a task", project: "Website Redesign", time: "2 hours ago", user: "Sarah Jenkins" },
  { id: 2, action: "commented on", project: "Marketing Campaign", time: "4 hours ago", user: "Michael Chen" },
  { id: 3, action: "completed a milestone in", project: "Product Launch", time: "Yesterday", user: "Emily Davis" },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Good morning, Team</h1>
          <p className="text-sm text-neutral-500">Here's what's happening in your workspaces today.</p>
        </div>
        <Button className="shrink-0">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 bg-neutral-50 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-neutral-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">124</div>
            <p className="text-xs text-neutral-500">+14% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-neutral-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-neutral-500">12 due today</p>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 text-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700 font-medium">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-neutral-900 leading-none">
                      <span className="font-medium">{activity.user}</span> {activity.action} <span className="font-medium">{activity.project}</span>
                    </p>
                    <p className="text-xs text-neutral-500">{activity.time}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0 text-neutral-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Put other widgets here */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] w-full flex items-center justify-center text-neutral-500 text-sm border-2 border-dashed border-neutral-200 rounded-lg">
              [Chart Placeholder]
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full flex items-center justify-center text-neutral-500 text-sm border-2 border-dashed border-neutral-200 rounded-lg">
              [List Placeholder]
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}