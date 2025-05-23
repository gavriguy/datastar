// This is auto-generated by Datastar. DO NOT EDIT.

namespace StarFederation.Datastar

open System

type FragmentMergeMode =
/// Morphs the fragment into the existing element using idiomorph.
| Morph
/// Replaces the inner HTML of the existing element.
| Inner
/// Replaces the outer HTML of the existing element.
| Outer
/// Prepends the fragment to the existing element.
| Prepend
/// Appends the fragment to the existing element.
| Append
/// Inserts the fragment before the existing element.
| Before
/// Inserts the fragment after the existing element.
| After
/// Upserts the attributes of the existing element.
| UpsertAttributes

type EventType =
/// An event for merging HTML fragments into the DOM.
| MergeFragments
/// An event for merging signals.
| MergeSignals
/// An event for removing HTML fragments from the DOM.
| RemoveFragments
/// An event for removing signals.
| RemoveSignals
/// An event for executing &lt;script/&gt; elements in the browser.
| ExecuteScript


module Consts =
    let [<Literal>] DatastarKey               = "datastar"
    let [<Literal>] Version                   = "1.0.0-beta.11"

    /// Default: TimeSpan.FromMilliseconds 1000
    let DefaultSseRetryDuration = TimeSpan.FromMilliseconds 1000


    /// Default: morph - Morphs the fragment into the existing element using idiomorph.
    let DefaultFragmentMergeMode = Morph

    let [<Literal>] DefaultFragmentsUseViewTransitions = false
    let [<Literal>] DefaultMergeSignalsOnlyIfMissing = false
    let [<Literal>] DefaultExecuteScriptAutoRemove = true

    let [<Literal>] DefaultExecuteScriptAttributes = "type module"

    let [<Literal>] DatastarDatalineSelector = "selector"
    let [<Literal>] DatastarDatalineMergeMode = "mergeMode"
    let [<Literal>] DatastarDatalineFragments = "fragments"
    let [<Literal>] DatastarDatalineUseViewTransition = "useViewTransition"
    let [<Literal>] DatastarDatalineSignals = "signals"
    let [<Literal>] DatastarDatalineOnlyIfMissing = "onlyIfMissing"
    let [<Literal>] DatastarDatalinePaths = "paths"
    let [<Literal>] DatastarDatalineScript = "script"
    let [<Literal>] DatastarDatalineAttributes = "attributes"
    let [<Literal>] DatastarDatalineAutoRemove = "autoRemove"

    module FragmentMergeMode =
        let toString this =
            match this with
                | FragmentMergeMode.Morph -> "morph"
                | FragmentMergeMode.Inner -> "inner"
                | FragmentMergeMode.Outer -> "outer"
                | FragmentMergeMode.Prepend -> "prepend"
                | FragmentMergeMode.Append -> "append"
                | FragmentMergeMode.Before -> "before"
                | FragmentMergeMode.After -> "after"
                | FragmentMergeMode.UpsertAttributes -> "upsertAttributes"

    module EventType =
        let toString this =
            match this with
                | EventType.MergeFragments -> "datastar-merge-fragments"
                | EventType.MergeSignals -> "datastar-merge-signals"
                | EventType.RemoveFragments -> "datastar-remove-fragments"
                | EventType.RemoveSignals -> "datastar-remove-signals"
                | EventType.ExecuteScript -> "datastar-execute-script"