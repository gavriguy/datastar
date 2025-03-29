;; This is auto-generated by Datastar. DO NOT EDIT.
(ns starfederation.datastar.clojure.consts
  (:require
    [clojure.string :as string]))


(def datastar-key                  "datastar")
(def version                       "1.0.0-beta.11")


;; -----------------------------------------------------------------------------
;; Default durations
;; -----------------------------------------------------------------------------
(def default-sse-retry-duration
  "The default duration for retrying SSE on connection reset. This is part of the underlying retry mechanism of SSE."
  1000)


;; -----------------------------------------------------------------------------
;; Default values
;; -----------------------------------------------------------------------------
(def default-execute-script-attributes
  "The default attributes for <script/> element use when executing scripts. It is a set of key-value pairs delimited by a newline \\n character."
  (-> "type module"
      (string/split #" ")
      (update 0 keyword)
      (->> (apply array-map))))


;; -----------------------------------------------------------------------------
;; Dataline literals
;; -----------------------------------------------------------------------------
(def selector-dataline-literal "selector ")
(def merge-mode-dataline-literal "mergeMode ")
(def fragments-dataline-literal "fragments ")
(def use-view-transition-dataline-literal "useViewTransition ")
(def signals-dataline-literal "signals ")
(def only-if-missing-dataline-literal "onlyIfMissing ")
(def paths-dataline-literal "paths ")
(def script-dataline-literal "script ")
(def attributes-dataline-literal "attributes ")
(def auto-remove-dataline-literal "autoRemove ")


;; -----------------------------------------------------------------------------
;; Default booleans
;; -----------------------------------------------------------------------------
(def default-fragments-use-view-transitions
  "Should fragments be merged using the ViewTransition API?"
  false)

(def default-merge-signals-only-if-missing
  "Should a given set of signals merge if they are missing?"
  false)

(def default-execute-script-auto-remove
  "Should script element remove itself after execution?"
  true)



;; -----------------------------------------------------------------------------
;; Enums
;; -----------------------------------------------------------------------------
;; FragmentMergeMode

(def fragment-merge-mode-morph
  "Morphs the fragment into the existing element using idiomorph."
  "morph")

(def fragment-merge-mode-inner
  "Replaces the inner HTML of the existing element."
  "inner")

(def fragment-merge-mode-outer
  "Replaces the outer HTML of the existing element."
  "outer")

(def fragment-merge-mode-prepend
  "Prepends the fragment to the existing element."
  "prepend")

(def fragment-merge-mode-append
  "Appends the fragment to the existing element."
  "append")

(def fragment-merge-mode-before
  "Inserts the fragment before the existing element."
  "before")

(def fragment-merge-mode-after
  "Inserts the fragment after the existing element."
  "after")

(def fragment-merge-mode-upsert-attributes
  "Upserts the attributes of the existing element."
  "upsertAttributes")


(def default-fragment-merge-mode
  "Default value for FragmentMergeMode.
  Morphs the fragment into the existing element using idiomorph."
  fragment-merge-mode-morph)


;; EventType

(def event-type-merge-fragments
  "An event for merging HTML fragments into the DOM."
  "datastar-merge-fragments")

(def event-type-merge-signals
  "An event for merging signals."
  "datastar-merge-signals")

(def event-type-remove-fragments
  "An event for removing HTML fragments from the DOM."
  "datastar-remove-fragments")

(def event-type-remove-signals
  "An event for removing signals."
  "datastar-remove-signals")

(def event-type-execute-script
  "An event for executing <script/> elements in the browser."
  "datastar-execute-script")